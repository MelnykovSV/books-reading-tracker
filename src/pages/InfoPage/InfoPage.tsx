import { Container } from './InfoPage.styled';
import { useNavigate } from 'react-router';
import { useMediaContext } from '../../mediaContext';
import { useEffect } from 'react';

export const InfoPage = () => {
  const media = useMediaContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (media !== true) {
      navigate('/registration');
    }
  }, [media, navigate]);

  if (media !== true) {
    return null;
  }

  return (
    <Container>
      <h2>Books Reading</h2>
      <b>Will help you to</b>
      <ul>
        <li>Create your goal faster and proceed to read</li>
        <li>Divide process proportionally for each day</li>
        <li>Track your success</li>
      </ul>

      <b>Will help you to</b>
      <ul>
        <li>Pose your own independent point of view</li>
        <li>Improve your professional skills according to new knowledge</li>
        <li>Become an interesting interlocutor</li>
      </ul>

      <div className="buttons-container">
        <button
          type="button"
          onClick={() => {
            navigate('/login');
          }}
        >
          log in
        </button>
        <button
          type="button"
          onClick={() => {
            navigate('/registration');
          }}
        >
          Register
        </button>
      </div>
    </Container>
  );
};
