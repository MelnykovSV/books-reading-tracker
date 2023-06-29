import { Container } from './TrainingPage.styled';

import { MyTraining } from '../../components/MyTraining/MyTraining';

const TrainingPage = () => {
  return (
    <Container>
      <MyTraining></MyTraining>

      {/* <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      /> */}
    </Container>
  );
};

export default TrainingPage;
