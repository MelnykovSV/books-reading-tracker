import { Container } from './UserPanel.styled';
import { NavLink } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getUser } from '../../redux/auth/authSlice';
import { logOut } from '../../redux/auth/operations';

export const UserPanel = () => {
  const user = useAppSelector(getUser);

  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <div className="user__label">
        <div className="user__icon-container">
          <span className="user__icon">{user.name ? user.name[0] : ''}</span>
        </div>

        <p className="user__name">{user.name}</p>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/training">Training</NavLink>
      </nav>

      <button type="button" onClick={logOutHandler}>
        Logout
      </button>
    </Container>
  );
};