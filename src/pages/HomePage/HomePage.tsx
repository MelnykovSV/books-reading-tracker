import React from 'react';
import { Container } from './HomePage.styled';
import { BookForm } from '../../components/BookForm/BookForm';
import { useState } from 'react';
import { Box } from '@mui/system';

import { BooksList } from '../../components/BooksList/BooksList';
import Modal from '@mui/material/Modal';
import { FeedbackForm } from '../../components/FeedbackForm/FeedBackForm';

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
          <h2>!!!</h2>
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
