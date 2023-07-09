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
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getPlanningLoadingStatus } from '../../redux/planning/planningSlice';
// import { LineChart } from '@mui/x-charts';
import { Modal } from '../../components/Modal/Modal';

import { processBooksData, arraySum } from '../../helpers';
import { IBookData } from '../../interfaces';
import { getSid } from '../../redux/auth/authSlice';
import { getPlanning } from '../../redux/planning/operations';
import {
  updateBooksAfterPlanningCreation,
  updateBookToRead,
} from '../../redux/auth/authSlice';
import { detectCurrentBookNumber } from '../../redux/planning/planningSlice';

const TrainingPage = () => {
  const stats = useAppSelector(getPlanningStats);
  const status = useAppSelector(getPlanningLoadingStatus);
  const planningId = useAppSelector(getPlanningId);
  const planningStatus = useAppSelector(getPlanningStatus);
  const books = useAppSelector(getPlanningBooks);
  const currentBookNumber = useAppSelector(detectCurrentBookNumber);

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
      // const bookNumber = getCurrentBookNumber(books);
      // if (!bookNumber || bookNumber === 1) {
      //   return;
      // }
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

  // useUnsavedChangesWarning(true);

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
      {/* {
        // (() => {
        //   switch (planningStatus) {
        //     case 'active' || 'success' || 'fail':
        //       return <MyTraining />;

        //     case 'none':
        //       return (
        //         <MyTrainingRegistration
        //           trainingBookList={trainingBookList}
        //           startDate={startDate}
        //           endDate={endDate}
        //           updateTrainingBookList={updateTrainingBookList}
        //           updateStartDate={updateStartDate}
        //           updateEndDate={updateEndDate}
        //         />
        //       );
        //     default:
        //       return <div>Loading...</div>;
        //   }
        // })()

        planningStatus === 'active' ||
        planningStatus === 'success' ||
        planningStatus === 'fail' ? (
          <MyTraining />
        ) : null
      } */}
      {/* {planningStatus === 'none' ? (
        <MyTrainingRegistration
          trainingBookList={trainingBookList}
          startDate={startDate}
          endDate={endDate}
          updateTrainingBookList={updateTrainingBookList}
          updateStartDate={updateStartDate}
          updateEndDate={updateEndDate}
        />
      ) : null} */}

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
          resetTrainingRegistrationData={resetTrainingRegistrationData}
        />
      )}
    </Container>
  );
};

export default TrainingPage;
