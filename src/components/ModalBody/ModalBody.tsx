import { Container } from './ModalBody.styled';

import { createPortal } from 'react-dom';
import { IModalProps } from '../../interfaces';
import { useAppDispatch } from '../../redux/hooks';
import {
  // getPlanningStatus,
  deletePlanning,
} from '../../redux/planning/planningSlice';
import { useNavigate } from 'react-router';

import { ReactComponent as ThumbIcon } from './../../images/icons/thumb.svg';

const modalRoot: Element | DocumentFragment =
  document.querySelector('#modal-root')!;

export const ModalBody = ({
  modalType,
  modalCloseHandler,
  resetTrainingRegistrationData,
}: IModalProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  switch (modalType) {
    case 'success':
      return (
        <Container className="success">
          <ThumbIcon />
          <p>Congratulations! You made it in time!</p>
          <div className="buttons-container">
            <button
              type="button"
              onClick={() => {
                modalCloseHandler();
                resetTrainingRegistrationData();
                dispatch(deletePlanning());
              }}
              className="button-accent"
            >
              New training
            </button>
            <button
              type="button"
              onClick={() => {
                modalCloseHandler();
                navigate('/');
                dispatch(deletePlanning());
              }}
            >
              Back
            </button>
          </div>
        </Container>
      );

    case 'fail':
      return createPortal(
        <Container className="fail">
          <ThumbIcon />
          <p>
            Well done! but you need to be a little bit faster. You can do it)
          </p>
          <div className="buttons-container">
            <button
              type="button"
              onClick={() => {
                modalCloseHandler();
                resetTrainingRegistrationData();
                dispatch(deletePlanning());
              }}
              className="button-accent"
            >
              New training
            </button>
            <button
              type="button"
              onClick={() => {
                modalCloseHandler();
                navigate('/');
                dispatch(deletePlanning());
              }}
            >
              Back
            </button>
          </div>
        </Container>,
        modalRoot
      );
    case 'book read':
      return (
        <Container className="book-read">
          <ThumbIcon />
          <p>Congratulations! Another book read.</p>
          <button
            type="button"
            onClick={() => {
              modalCloseHandler();
            }}
            className="button-accent"
          >
            Done
          </button>
        </Container>
      );
  }
};
