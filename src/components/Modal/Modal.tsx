import { Container } from './Modal.styled';

import { createPortal } from 'react-dom';
import { IModalProps } from '../../interfaces';
import { useAppDispatch } from '../../redux/hooks';
import {
  // getPlanningStatus,
  deletePlanning,
} from '../../redux/planning/planningSlice';
import { useNavigate } from 'react-router';
const modalRoot: Element | DocumentFragment =
  document.querySelector('#modal-root')!;

export const Modal = ({ modalType, modalCloseHandler }: IModalProps) => {
  const navigate = useNavigate();
  // const planningStatus = useAppSelector(getPlanningStatus);
  const dispatch = useAppDispatch();
  switch (modalType) {
    case 'success':
      return createPortal(
        <Container>
          <p>Congratulations! You made it in time!</p>
          <button
            type="button"
            onClick={() => {
              modalCloseHandler();
              dispatch(deletePlanning());
            }}
          >
            New training
          </button>
          <button
            type="button"
            onClick={() => {
              modalCloseHandler();
              navigate('/');
            }}
          >
            Back
          </button>
        </Container>,
        modalRoot
      );
    case 'fail':
      return createPortal(
        <Container>
          <p>
            Well done! but you need to be a little bit faster. You can do it)
          </p>

          <button
            type="button"
            onClick={() => {
              modalCloseHandler();
              dispatch(deletePlanning());
            }}
          >
            New training
          </button>
          <button
            type="button"
            onClick={() => {
              modalCloseHandler();
              navigate('/');
            }}
          >
            Back
          </button>
        </Container>,
        modalRoot
      );
    case 'book read':
      return createPortal(
        <Container>
          <p>Congratulations! Another book read.</p>
          <button
            type="button"
            onClick={() => {
              modalCloseHandler();
            }}
          >
            Done
          </button>
        </Container>,
        modalRoot
      );
  }
};
