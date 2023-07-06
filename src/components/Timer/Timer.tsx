import { Container } from './Timer.styled';
import { useAppSelector } from '../../redux/hooks';
import { getStartDate, getEndDate } from '../../redux/planning/planningSlice';
import dayjs from 'dayjs';

export const Timer = () => {
  const startDate = useAppSelector(getStartDate);
  const endDate = useAppSelector(getEndDate);

  return (
    <Container>
      <h2>{dayjs(endDate).diff(startDate, 'day')}</h2>
    </Container>
  );
};
