import { Container } from './MyGoals.styled';
import { useAppSelector } from '../../redux/hooks';
import {
  getPlanningFromStore,
  getStartDate,
  getEndDate,
  getPlanningId,
} from '../../redux/planning/planningSlice';
import { IMyGoalsProps } from '../../interfaces';
import { getCurrentBookNumber } from '../../helpers';

import dayjs from 'dayjs';

export const MyGoals = ({
  trainingBookList,
  planningStartDate,
  planningEndDate,
}: IMyGoalsProps) => {
  const planning = useAppSelector(getPlanningFromStore);

  const startDate = useAppSelector(getStartDate);
  const endDate = useAppSelector(getEndDate);
  const planningId = useAppSelector(getPlanningId);

  return (
    <Container isPlanningId={planningId}>
      <h2>My goals</h2>
      <ul className="goals-body">
        <li className="goal">
          <p className="goal__value">
            {planningId ? planning.books.length : trainingBookList.length}
          </p>
          <p className="goal__label">Amount of books</p>
        </li>
        <li className="goal">
          <p className="goal__value">
            {planningId
              ? dayjs(endDate).diff(dayjs(startDate), 'day')
              : dayjs(planningEndDate).diff(planningStartDate, 'day') || 0}
          </p>
          <p className="goal__label">Amount of days</p>
        </li>
        {planningId && (
          <li className="goal books-left">
            <p className="goal__value books-left__value">
              {planning.books.length - getCurrentBookNumber(planning.books) + 1}
            </p>
            <p className="goal__label books-left__label">Books left</p>
          </li>
        )}
      </ul>
    </Container>
  );
};
