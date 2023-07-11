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
import { LineChart } from '@mui/x-charts';
import { ModalBody } from '../../components/ModalBody/ModalBody';

import { processBooksData, arraySum } from '../../helpers';
import { IBookData } from '../../interfaces';
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

  const updateIsFormSubmitted = (value: boolean) => {
    setIsFormSubmitted(value);
  };

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
    <Container>
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
      {planningId && <MyTrainingResults></MyTrainingResults>}

      {status === 'fulfilled' ? (
        <LineChart
          xAxis={[
            {
              scaleType: 'point',
              data: chartData[0] as string[],

              // min: 0,
              // max: 10,
            },
          ]}
          series={[
            {
              data: chartData[1] as number[],
              curve: 'natural',
            },
            {
              data: chartData[2] as number[],
              curve: 'natural',
            },
          ]}
          width={500}
          height={300}
        />
      ) : null}

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
