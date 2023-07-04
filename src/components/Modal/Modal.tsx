import { Container } from './Modal.styled';

import { createPortal } from 'react-dom';
import { IModalProps } from '../../interfaces';
const modalRoot: Element | DocumentFragment =
  document.querySelector('#modal-root')!;

export const Modal = ({ modalType }: IModalProps) => {
  return createPortal(
    <Container>
      <h2>{modalType}</h2>
    </Container>,
    modalRoot
  );
};
