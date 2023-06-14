import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const App = async () => {
  const response = await axios.post('/auth/register', {
    name: 'Qweewqr',
    email: 'qwe1313@mail.com',
    password: 'aA111111',
  });
  console.log(response);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
