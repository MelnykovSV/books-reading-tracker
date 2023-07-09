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
    <Container>
      <h2>My goals</h2>
      <ul className="goals-body">
        <li className="goal">
          <p>{planningId ? planning.books.length : trainingBookList.length}</p>
          <p>Amount of books</p>
        </li>
        <li className="goal">
          <p>
            {planningId
              ? dayjs(endDate).diff(dayjs(startDate), 'day')
              : dayjs(planningEndDate).diff(planningStartDate, 'day') || 0}
          </p>
          <p>Amount of days</p>
        </li>
        {planningId && (
          <li className="goal">
            <p>
              {planning.books.length - getCurrentBookNumber(planning.books) + 1}
            </p>
            <p>Books left</p>
          </li>
        )}
      </ul>
    </Container>
  );
};
