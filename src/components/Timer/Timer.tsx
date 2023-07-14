import { Container } from './Timer.styled';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getEndDate } from '../../redux/planning/planningSlice';
import dayjs from 'dayjs';
import { useAppDispatch } from '../../redux/hooks';
import { finishPlanning } from '../../redux/planning/planningSlice';
import { timeDifferenceProcessor } from '../../helpers';

export const Timer = () => {
  const dispatch = useAppDispatch();

  const endDate = useAppSelector(getEndDate);

  //to test how timer ends
  // const endDate = Date.now() + 20000;

  const [timeLeft, setTimeLeft] = useState(dayjs(endDate).diff(dayjs()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dayjs(endDate).diff(dayjs()) >= 0) {
        setTimeLeft(dayjs(endDate).diff(dayjs()));
      } else {
        setTimeLeft(0);
        dispatch(finishPlanning('fail'));
        clearInterval(intervalId);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h3>Goals countdown</h3>
      <dl className="timer-body">
        <div className="timer-body__item">
          <dt className="timer-body__value">
            {timeDifferenceProcessor(timeLeft).d.toString().padStart(2, '0')}
          </dt>
          <dd className="timer-body__label">Days</dd>
        </div>
        <div className="timer-body__item">
          <dt className="timer-body__value">
            {timeDifferenceProcessor(timeLeft).h.toString().padStart(2, '0')}
          </dt>
          <dd className="timer-body__label">Hrs</dd>
        </div>
        <div className="timer-body__item">
          <dt className="timer-body__value">
            {timeDifferenceProcessor(timeLeft).m.toString().padStart(2, '0')}
          </dt>
          <dd className="timer-body__label">Minutes</dd>
        </div>
        <div className="timer-body__item">
          <dt className="timer-body__value">
            {timeDifferenceProcessor(timeLeft).s.toString().padStart(2, '0')}
          </dt>
          <dd className="timer-body__label">Seconds</dd>
        </div>
      </dl>
    </Container>
  );
};
