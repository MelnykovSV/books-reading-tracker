import { Container } from './TrainingPage.styled';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { MyTraining } from '../../components/MyTraining/MyTraining';

import { MyGoals } from '../../components/MyGoals/MyGoals';
import { MyTrainingResults } from '../../components/MyTrainingResults/MyTrainingResults';
import { MyTrainingRegistration } from '../../components/MyTrainingRegistration/MyTrainingRegistration';
import {
  getPlanningStats,
  getPlanningId,
  getPlanningStatus,
  getPlanningBooks,
  getStartDate,
  getEndDate,
  getProcessedChartData,
} from '../../redux/planning/planningSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getPlanningLoadingStatus } from '../../redux/planning/planningSlice';
// import { LineChart } from '@mui/x-charts';
import { ModalBody } from '../../components/ModalBody/ModalBody';

import { processBooksData, arraySum } from '../../helpers';
import { IBookData, IChartData } from '../../interfaces';
import { getSid } from '../../redux/auth/authSlice';
import { getPlanning } from '../../redux/planning/operations';
import {
  updateBooksAfterPlanningCreation,
  updateBookToRead,
} from '../../redux/auth/authSlice';
import { detectCurrentBookNumber } from '../../redux/planning/planningSlice';
import { Modal } from '@mui/material';

import { Box } from '@mui/system';
import { deletePlanning } from '../../redux/planning/planningSlice';

import { processPlanningStats } from '../../helpers';
import { ModernNormalize } from 'emotion-modern-normalize';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  LabelList,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const TrainingPage = () => {
  const stats = useAppSelector(getPlanningStats);
  const planningStartDate = useAppSelector(getStartDate);
  const planningEndDate = useAppSelector(getEndDate);
  const status = useAppSelector(getPlanningLoadingStatus);
  const planningId = useAppSelector(getPlanningId);
  const planningStatus = useAppSelector(getPlanningStatus);
  const books = useAppSelector(getPlanningBooks);
  const currentBookNumber = useAppSelector(detectCurrentBookNumber);

  const chartData = useAppSelector(getProcessedChartData);

  const sid = useAppSelector(getSid);

  const initialState = [] as IBookData[];
  const getCurrentDate = () => {
    return dayjs().format('YYYY-MM-DD');
  };

  const [trainingBookList, setTrainingBookList] = useState(initialState);
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const updateIsFormSubmitted = (value: boolean) => {
    setIsFormSubmitted(value);
  };

  useEffect(() => {
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000);
  }, [chartData]);

  const modalCloseHandler = () => {
    setIsModalOpen(false);
    resetTrainingRegistrationData();
    dispatch(deletePlanning());
  };

  const resetTrainingRegistrationData = () => {
    setStartDate(getCurrentDate());
    setEndDate('');
    setTrainingBookList(initialState);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (sid) {
      dispatch(getPlanning());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sid]);

  useEffect(() => {
    switch (planningStatus) {
      case 'none':
        if (!isDataLoaded) {
          setIsDataLoaded(true);
        }
        break;
      case 'active':
        if (!isDataLoaded) {
          setIsDataLoaded(true);
        }
        if (isFormSubmitted) {
          dispatch(updateBooksAfterPlanningCreation(books));
        }
        console.log(
          processPlanningStats(stats, planningStartDate, planningEndDate, 300)
        );

        break;
      case 'success':
        setModalType('success');
        setIsModalOpen(true);
        break;
      case 'fail':
        setModalType('fail');
        setIsModalOpen(true);
        break;
      default:
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planningStatus]);

  useEffect(() => {
    if (planningStatus === 'active') {
      if (currentBookNumber && currentBookNumber !== 1 && isDataLoaded) {
        dispatch(updateBookToRead(books[currentBookNumber - 2]));

        setModalType('book read');

        setIsModalOpen(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBookNumber]);

  const updateTrainingBookList = (value: IBookData[]) => {
    setTrainingBookList(value);
  };

  const updateStartDate = (value: string) => {
    setStartDate(value);
  };

  const updateEndDate = (value: string) => {
    setEndDate(value);
  };

  if (status === 'fulfilled') {
    console.log(
      Object.values(processBooksData(Object.values(stats))).map(
        (item, i, arr: any) => {
          const result = (338 - arraySum(arr, i)) / (10 - i);
          return result;
        }
      )
    );
  }

  return (
    <Container className="container">
      <ModernNormalize />
      {(() => {
        if (
          planningStatus === 'active' ||
          planningStatus === 'success' ||
          planningStatus === 'fail'
        ) {
          return <MyTraining />;
        }
        if (planningStatus === 'none') {
          return (
            <MyTrainingRegistration
              trainingBookList={trainingBookList}
              startDate={startDate}
              endDate={endDate}
              updateTrainingBookList={updateTrainingBookList}
              updateStartDate={updateStartDate}
              updateEndDate={updateEndDate}
              updateIsFormSubmitted={updateIsFormSubmitted}
            />
          );
        } else {
          return <div>Loading...</div>;
        }
      })()}

      <MyGoals
        trainingBookList={trainingBookList}
        planningStartDate={startDate}
        planningEndDate={endDate}
      ></MyGoals>

      {planningId ? (
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="name" tick={() => null as any} tickSize={0}>
            <Label value="Pages of my website" offset={0} position="center" />
          </XAxis>
          <YAxis tick={false} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="actual"
            stroke="#8884d8"
            activeDot={{ r: 4 }}
            isAnimationActive={isAnimated}
            label={({ x, y, stroke, value }) => {
              if (value === chartData[chartData.length - 1].actual) {
                return (
                  <text
                    x={x}
                    y={y}
                    // dy={-4}
                    fill={stroke}
                    fontSize={10}
                    textAnchor="middle"
                  >
                    {value}
                  </text>
                );
              } else {
                return (
                  <text
                    x={x}
                    y={y}
                    // dy={-4}
                    fill={stroke}
                    fontSize={10}
                    textAnchor="middle"
                  ></text>
                );
              }
            }}
          />

          <Line
            type="monotone"
            dataKey="plan"
            stroke="#82ca9d"
            isAnimationActive={false}
            label={true}
          />
        </LineChart>
      ) : null}
      {planningId && <MyTrainingResults></MyTrainingResults>}

      <Modal open={isModalOpen} onClose={modalCloseHandler}>
        <Box>
          <ModalBody
            modalType={modalType}
            modalCloseHandler={() => {
              setIsModalOpen(false);
            }}
            resetTrainingRegistrationData={resetTrainingRegistrationData}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default TrainingPage;
