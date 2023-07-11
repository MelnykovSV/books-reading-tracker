import React from 'react';
import { Container } from './HomePage.styled';
import { BookForm } from '../../components/BookForm/BookForm';
import { useState } from 'react';
import { Box } from '@mui/system';

import { BooksList } from '../../components/BooksList/BooksList';
import Modal from '@mui/material/Modal';
import { FeedbackForm } from '../../components/FeedbackForm/FeedBackForm';

// import dayjs from 'dayjs';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [feedbackBookId, setFeedbackBookId] = useState('');

  const modalCloseHandler = () => {
    setIsModalOpen(false);
    setFeedbackBookId('');
  };
  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };

  const updateFeedbackBookId = (id: string) => {
    setFeedbackBookId(id);
  };

  // {
  //   const data = [
  //     {
  //       time: '2023-07-02 23:05',
  //       pagesCount: 1,
  //     },
  //     {
  //       time: '2023-07-02 23:05',
  //       pagesCount: 15,
  //     },
  //     {
  //       time: '2023-07-02 23:05',
  //       pagesCount: 25,
  //     },
  //     {
  //       time: '2023-07-02 23:08',
  //       pagesCount: 100,
  //     },
  //     {
  //       time: '2023-07-02 23:08',
  //       pagesCount: 50,
  //     },
  //     {
  //       time: '2023-07-10 18:14',
  //       pagesCount: 5,
  //     },
  //     {
  //       time: '2023-07-10 18:24',
  //       pagesCount: 2,
  //     },
  //   ];

  //   const totalPagestoRead = 1000;
  //   const startDateString = '2023-07-02';
  //   const endDateString = '2023-08-02';

  //   const generateDatesArray = (
  //     startDateString: string,
  //     endDateString: string
  //   ) => {
  //     const startDate = dayjs(startDateString);
  //     const endDate = dayjs(endDateString);
  //     const result = [];
  //     let dateAccumulator = startDate.format('YYYY-MM-DD');
  //     while (dateAccumulator !== endDate.format('YYYY-MM-DD')) {
  //       result.push(dateAccumulator);
  //       dateAccumulator = dayjs(dateAccumulator)
  //         .add(1, 'day')
  //         .format('YYYY-MM-DD');
  //     }
  //     result.push(dateAccumulator);

  //     return result;
  //   };

  //   const generateTemplateObject = (arr: string[]) => {
  //     const templateObject = {} as {
  //       [key: string]: { actual: number; plan: number };
  //     };
  //     arr.forEach(
  //       (item: string) => (templateObject[item] = { actual: 0, plan: 0 })
  //     );
  //     return templateObject;
  //   };

  //   const extractDate = (string: string) => {
  //     const date = string.split(' ')[0];
  //     return date;
  //   };

  //   const processPlanningStats = (
  //     dataArray: { time: string; pagesCount: number }[],
  //     startDate: string,
  //     endDate: string,
  //     totalPagestoRead: number
  //   ) => {
  //     const fullDatesArray = generateDatesArray(startDate, endDate);
  //     const totalDays = fullDatesArray.length;
  //     let pagesRead = 0;
  //     const pastDatesArray = generateDatesArray(
  //       startDateString,
  //       dayjs().format('YYYY-MM-DD')
  //     );

  //     console.log(pastDatesArray);
  //     const templateObject = generateTemplateObject(pastDatesArray);

  //     const result = dataArray.reduce(
  //       (acc, item) => {
  //         const date = extractDate(item.time);
  //         acc[date].actual += item.pagesCount;
  //         return acc;
  //       },
  //       { ...templateObject }
  //     );

  //     pastDatesArray.forEach((item, i) => {
  //       result[item].plan = Math.round(
  //         (totalPagestoRead - pagesRead) / (totalDays - i)
  //       );
  //       pagesRead += result[item].actual;
  //     });

  //     return result;
  //   };

  //   // console.log(
  //   //   processPlanningStats(
  //   //     data,
  //   //     startDateString,
  //   //     endDateString,
  //   //     totalPagestoRead
  //   //   )
  //   // );
  // }

  return (
    <Container>
      <div className="container">
        {' '}
        <BookForm></BookForm>
        <BooksList
          status="read"
          modalOpenHandler={modalOpenHandler}
          updateFeedbackBookId={updateFeedbackBookId}
        />
        <BooksList status="reading now" />
        <BooksList status="going to read" />
      </div>
      <Modal open={isModalOpen} onClose={modalCloseHandler}>
        <Box>
          <FeedbackForm
            id={feedbackBookId}
            modalCloseHandler={modalCloseHandler}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default HomePage;
