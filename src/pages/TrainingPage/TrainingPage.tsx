import { Container } from './TrainingPage.styled';
import { useState, useEffect, Fragment } from 'react';
import dayjs from 'dayjs';

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
import { ModalBody } from '../../components/ModalBody/ModalBody';

import {
  processBooksData,
  arraySum,
  calculateLabelCoordinates,
} from '../../helpers';
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
import { ModernNormalize } from 'emotion-modern-normalize';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import { TrainingListActive } from '../../components/TrainingListActive/TrainingListActive';
import { Timer } from '../../components/Timer/Timer';
import { MobileTrainingBooksList } from '../../components/MobileTrainingBooksList/MobileTrainingBooksList';

import { ReactComponent as PlusIcon } from '../../images/icons/plus.svg';
import { createPlanning } from '../../redux/planning/operations';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ReactComponent as BackIcon } from '../../images/icons/back.svg';

const CustomTooltip = ({
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  return (
    <div className="custom-tooltip">
      <b className="custom-tooltip__date">{label}</b>

      <ul className="custom-tooltip__list">
        {payload &&
          payload.map(item => {
            if (item.name !== 'hidden-line') {
              return (
                <li
                  className={`custom-tooltip__list-item ${item.dataKey}`}
                  key={item.dataKey}
                >
                  {item.dataKey}: {item.value}
                </li>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
};

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
  const matches = useMediaQuery('(min-width:768px)');
  const matchesDesktop = useMediaQuery('(min-width:1280px)');

  const [isMobileFormOpen, setisMobileFormOpen] = useState(false);

  const openMobileForm = () => {
    setisMobileFormOpen(true);
  };
  const closeMobileForm = () => {
    setisMobileFormOpen(false);
  };

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

  let actualYCoordinate = 0;
  let planYCoordinate = 0;
  const removeFromTrainingBookListHandler = (id: string) => {
    updateTrainingBookList(
      trainingBookList.filter((item: IBookData) => item._id !== id)
    );
  };

  return (
    <Container className="container">
      <ModernNormalize />
      {!matchesDesktop && (matches || !isMobileFormOpen) && (
        <MyGoals
          trainingBookList={trainingBookList}
          planningStartDate={startDate}
          planningEndDate={endDate}
        ></MyGoals>
      )}

      {(() => {
        if (
          planningStatus === 'active' ||
          planningStatus === 'success' ||
          planningStatus === 'fail'
        ) {
          return (
            <div className="my-training-container">
              <Timer></Timer>
              {/* {matchesDesktop && (
                <MyGoals
                  trainingBookList={trainingBookList}
                  planningStartDate={startDate}
                  planningEndDate={endDate}
                ></MyGoals>
              )} */}

              {matches ? (
                <TrainingListActive></TrainingListActive>
              ) : (
                <MobileTrainingBooksList type="active" />
              )}
            </div>
          );
        }
        if (planningStatus === 'none') {
          return (
            <Fragment>
              {matches && (
                <MyTrainingRegistration
                  trainingBookList={trainingBookList}
                  startDate={startDate}
                  endDate={endDate}
                  updateTrainingBookList={updateTrainingBookList}
                  updateStartDate={updateStartDate}
                  updateEndDate={updateEndDate}
                  updateIsFormSubmitted={updateIsFormSubmitted}
                />
              )}

              {matchesDesktop && (
                <MyGoals
                  trainingBookList={trainingBookList}
                  planningStartDate={startDate}
                  planningEndDate={endDate}
                ></MyGoals>
              )}
              {!matches && !isMobileFormOpen && (
                <Fragment>
                  <MobileTrainingBooksList
                    type="registration"
                    trainingList={trainingBookList}
                    removeFromTrainingListHandler={
                      removeFromTrainingBookListHandler
                    }
                  />
                  <button
                    type="button"
                    className="form-open-button"
                    onClick={openMobileForm}
                  >
                    <PlusIcon />
                  </button>

                  {trainingBookList.length && endDate ? (
                    <button
                      type="button"
                      onClick={() => {
                        const queryBody = {
                          startDate,
                          endDate,
                          books: trainingBookList.map(item => item._id),
                        };
                        dispatch(createPlanning(queryBody));
                        updateIsFormSubmitted(true);
                      }}
                    >
                      Submit ref
                    </button>
                  ) : null}
                </Fragment>
              )}
              {!matches && isMobileFormOpen && (
                <Fragment>
                  <button
                    className="book-form__close-button"
                    type="button"
                    onClick={closeMobileForm}
                  >
                    <BackIcon />
                  </button>
                  <MyTrainingRegistration
                    trainingBookList={trainingBookList}
                    startDate={startDate}
                    endDate={endDate}
                    updateTrainingBookList={updateTrainingBookList}
                    updateStartDate={updateStartDate}
                    updateEndDate={updateEndDate}
                    updateIsFormSubmitted={updateIsFormSubmitted}
                  />
                </Fragment>
              )}
            </Fragment>
          );
        } else {
          return <div>Loading...</div>;
        }
      })()}

      {matchesDesktop && planningId && (
        <MyGoals
          trainingBookList={trainingBookList}
          planningStartDate={startDate}
          planningEndDate={endDate}
        ></MyGoals>
      )}

      {status && (matches || !isMobileFormOpen) ? (
        <ResponsiveContainer
          className="responsive-container"
          width="100%"
          height={matches ? 340 : 290}
        >
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis
              dataKey="name"
              tick={() => null as any}
              tickSize={0}
              label={{
                value: 'Time',
                position: 'insideRight',
                offset: 0,
              }}
            />

            <YAxis tick={false} padding={{ top: 40, bottom: 40 }} />
            <Tooltip content={<CustomTooltip />} />

            <Line
              className="line-for-labels-coordinates-calculation"
              dataKey="actual"
              name="hidden-line"
              isAnimationActive={false}
              label={({ x, y, stroke, value }) => {
                actualYCoordinate = y;
                return <text>.</text>;
              }}
            />
            <Line
              className="line-for-labels-coordinates-calculation"
              dataKey="plan"
              name="hidden-line"
              isAnimationActive={false}
              label={({ x, y, stroke, value }) => {
                planYCoordinate = y;
                return <text>.</text>;
              }}
            />

            <Line
              type="natural"
              className="line-actual"
              dataKey="actual"
              stroke="#ff6b08"
              dot={{ stroke: '#ff6b08', fill: '#ff6b08', strokeWidth: 4 }}
              strokeWidth={2}
              activeDot={{ r: 4 }}
              isAnimationActive={isAnimated}
              label={({ x, y, stroke, value }) => {
                const { actCorrection } = calculateLabelCoordinates(
                  actualYCoordinate,
                  planYCoordinate
                );
                console.log(x, y);

                return (
                  <Fragment>
                    <rect
                      x={x - 40}
                      y={y - 37 + actCorrection}
                      width={50}
                      height={30}
                      fill="#F5F7FA"
                    ></rect>
                    <text
                      x={x}
                      y={y}
                      dy={-17 + actCorrection}
                      dx={-15}
                      fill={'#ff6b08'}
                      fontSize={10}
                      textAnchor="middle"
                    >
                      Act
                    </text>
                  </Fragment>
                );
              }}
            />

            <Line
              type="monotone"
              dataKey="plan"
              stroke="#091E3F"
              strokeWidth={2}
              dot={{ stroke: '#091E3F', fill: '#091E3F', strokeWidth: 4 }}
              isAnimationActive={false}
              label={({ x, y, stroke, value }) => {
                const { planCorrection } = calculateLabelCoordinates(
                  actualYCoordinate,
                  planYCoordinate
                );
                console.log(x, y);
                return (
                  <Fragment>
                    <rect
                      x={x - 40}
                      y={y - 37 + planCorrection}
                      width={50}
                      height={30}
                      fill="#F5F7FA"
                    ></rect>
                    <text
                      x={x}
                      y={y}
                      dy={-17 + planCorrection}
                      dx={-15}
                      fill={'black'}
                      fontSize={10}
                      textAnchor="middle"
                    >
                      Plan
                    </text>
                  </Fragment>
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
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
