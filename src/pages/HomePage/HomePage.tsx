import React from 'react';
import { Container } from './HomePage.styled';
import { BookForm } from '../../components/BookForm/BookForm';
import { useState, Fragment } from 'react';
import { Box } from '@mui/system';

import { BooksList } from '../../components/BooksList/BooksList';
import Modal from '@mui/material/Modal';
import { FeedbackForm } from '../../components/FeedbackForm/FeedBackForm';
import useMediaQuery from '@mui/material/useMediaQuery';

// import dayjs from 'dayjs';

const HomePage = () => {
  const matches = useMediaQuery('(min-width:768px)');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [feedbackBookId, setFeedbackBookId] = useState('');
  const [isMobileFormOpen, setisMobileFormOpen] = useState(false);

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

  const openMobileForm = () => {
    setisMobileFormOpen(true);
  };
  const closeMobileForm = () => {
    setisMobileFormOpen(false);
  };

  return (
    <Container>
      <div className="container">
        {(matches || isMobileFormOpen) && (
          <Fragment>
            <h2>Form!!!</h2>
            <BookForm></BookForm>
            <button type="button" onClick={closeMobileForm}>
              Close form
            </button>
          </Fragment>
        )}

        {(matches || !isMobileFormOpen) && (
          <Fragment>
            <BooksList
              status="read"
              modalOpenHandler={modalOpenHandler}
              updateFeedbackBookId={updateFeedbackBookId}
            />
            <BooksList status="reading now" />
            <BooksList status="going to read" />
          </Fragment>
        )}
      </div>

      {(matches || !isMobileFormOpen) && (
        <Fragment>
          {' '}
          <Modal open={isModalOpen} onClose={modalCloseHandler}>
            <Box>
              <FeedbackForm
                id={feedbackBookId}
                modalCloseHandler={modalCloseHandler}
              />
            </Box>
          </Modal>
          <button type="button" onClick={openMobileForm}>
            Open form
          </button>
        </Fragment>
      )}
    </Container>
  );
};

export default HomePage;
