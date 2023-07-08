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
      <dl>
        <div>
          <dt>
            {timeDifferenceProcessor(timeLeft).d.toString().padStart(2, '0')}
          </dt>
          <dd>Days</dd>
        </div>
        <div>
          <dt>
            {timeDifferenceProcessor(timeLeft).h.toString().padStart(2, '0')}
          </dt>
          <dd>Hrs</dd>
        </div>
        <div>
          <dt>
            {timeDifferenceProcessor(timeLeft).m.toString().padStart(2, '0')}
          </dt>
          <dd>Minutes</dd>
        </div>
        <div>
          <dt>
            {timeDifferenceProcessor(timeLeft).s.toString().padStart(2, '0')}
          </dt>
          <dd>Seconds</dd>
        </div>
      </dl>
    </Container>
  );
};
