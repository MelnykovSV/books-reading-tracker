import { Container } from './MyGoals.styled';
import { useAppSelector } from '../../redux/hooks';
import {
  getPlanningFromStore,
  getStartDate,
  getEndDate,
} from '../../redux/planning/planningSlice';
import { IBookData } from '../../interfaces';

import dayjs from 'dayjs';

export const MyGoals = () => {
  const planning = useAppSelector(getPlanningFromStore);

  const startDate = useAppSelector(getStartDate);
  const endDate = useAppSelector(getEndDate);

  return (
    <Container>
      <h2>My goals</h2>
      <ul className="goals-body">
        <li className="goal">
          <p>{planning.status === 'fulfilled' ? planning.books.length : 0}</p>
          <p>Amount of books</p>
        </li>
        <li className="goal">
          <p>
            {planning.status === 'fulfilled'
              ? dayjs(endDate).diff(dayjs(startDate), 'day')
              : 0}
          </p>
          <p>Amount of days</p>
        </li>
        <li className="goal">
          <p>
            {planning.status === 'fulfilled'
              ? planning.books.filter(
                  (item: IBookData) => item.pagesTotal !== item.pagesFinished
                ).length
              : 0}
          </p>
          <p>Books left</p>
        </li>
      </ul>
    </Container>
  );
};
