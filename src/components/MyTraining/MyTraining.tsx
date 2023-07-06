import { Container } from './MyTraining.styled';
import { TrainingListActive } from '../TrainingListActive/TrainingListActive';
import { Timer } from '../Timer/Timer';

export const MyTraining = () => {
  return (
    <Container>
      <Timer></Timer>
      <TrainingListActive></TrainingListActive>
    </Container>
  );
};
