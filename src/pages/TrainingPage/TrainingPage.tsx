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
} from '../../redux/planning/planningSlice';
import { useAppSelector } from '../../redux/hooks';
import { getPlanningLoadingStatus } from '../../redux/planning/planningSlice';
// import { LineChart } from '@mui/x-charts';
import { Modal } from '../../components/Modal/Modal';

import { processBooksData, arraySum } from '../../helpers';
import { IBookData } from '../../interfaces';
import { getCurrentBookNumber } from '../../helpers';

const TrainingPage = () => {
  const stats = useAppSelector(getPlanningStats);
  const status = useAppSelector(getPlanningLoadingStatus);
  const planningId = useAppSelector(getPlanningId);
  const planningStatus = useAppSelector(getPlanningStatus);
  const books = useAppSelector(getPlanningBooks);

  const initialState = [] as IBookData[];
  const getCurrentDate = () => {
    return dayjs().format('YYYY-MM-DD');
  };

  const [trainingBookList, setTrainingBookList] = useState(initialState);
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    switch (planningStatus) {
      case 'none':
        break;
      case 'active':
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
  }, [planningStatus]);

  useEffect(() => {
    if (planningStatus === 'active') {
      const bookNumber = getCurrentBookNumber(books);
      if (!bookNumber || bookNumber === 1) {
        return;
      }
      setModalType('book read');
      setIsModalOpen(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  const updateTrainingBookList = (value: IBookData[]) => {
    setTrainingBookList(value);
  };

  const updateStartDate = (value: string) => {
    setStartDate(value);
  };

  const updateEndDate = (value: string) => {
    setEndDate(value);
  };

  console.log('STATS!');

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
      {planningStatus === 'active' || 'success' || 'fail' ? (
        <MyTraining />
      ) : (
        <MyTrainingRegistration
          trainingBookList={trainingBookList}
          startDate={startDate}
          endDate={endDate}
          updateTrainingBookList={updateTrainingBookList}
          updateStartDate={updateStartDate}
          updateEndDate={updateEndDate}
        />
      )}

      <MyGoals
        trainingBookList={trainingBookList}
        planningStartDate={startDate}
        planningEndDate={endDate}
      ></MyGoals>
      {planningId && <MyTrainingResults></MyTrainingResults>}

      {/* {status === 'fulfilled' ? (
        <LineChart
          xAxis={[
            {
              data: Object.keys(processBooksData(Object.values(stats))).map(
                (item, i) => i + 1
              ),

              min: 0,
              max: 10,
            },
          ]}
          series={[
            {
              data: Object.values(processBooksData(Object.values(stats))),
              curve: 'natural',
            },
            {
              data: Object.values(processBooksData(Object.values(stats))).map(
                (item, i, arr) => {
                  const result = (338 - arraySum(arr, i)) / (10 - i);
                  return result;
                }
              ),
              curve: 'natural',
            },
          ]}
          width={500}
          height={300}
        />
      ) : null} */}
      {isModalOpen && (
        <Modal
          modalType={modalType}
          modalCloseHandler={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </Container>
  );
};

export default TrainingPage;
