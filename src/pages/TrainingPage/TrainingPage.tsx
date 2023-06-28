import React, { useState } from 'react';
import { Container } from './TrainingPage.styled';

import { LineChart } from '@mui/x-charts/LineChart';
import { MyTraining } from '../../components/MyTraining/MyTraining';
import { IBookData } from '../../interfaces';

const initialState = [] as IBookData[];

const TrainingPage = () => {
  const [trainingList, setTrainingList] = useState(initialState);

  const addToTrainingListHandler = (bookData: IBookData) => {
    if (bookData && !trainingList.find(item => item._id === bookData._id)) {
      const { title, author, publishYear, pagesTotal, _id, pagesFinished } =
        bookData;
      setTrainingList([
        ...trainingList,
        { title, author, publishYear, pagesTotal, _id, pagesFinished },
      ]);
      console.log(trainingList);
    }
  };

  const removeFromTrainingListHandler = (id: string) => {
    setTrainingList(trainingList.filter((item: IBookData) => item._id !== id));
  };

  const formSubmitHandler = e => {
    console.log(e);
  };

  return (
    <Container>
      <MyTraining
        trainingList={trainingList}
        addToTrainingListHandler={addToTrainingListHandler}
        removeFromTrainingListHandler={removeFromTrainingListHandler}
        formSubmitHandler={formSubmitHandler}
      ></MyTraining>

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
