import { Container } from './TrainingList.styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ITrainingList } from '../../interfaces';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as BookIcon } from '../../images/icons/library.svg';
import { ReactComponent as DeleteIcon } from '../../images/icons/delete.svg';

export const TrainingList = ({
  trainingList,
  removeFromTrainingListHandler,
}: ITrainingList) => {
  const matches = useMediaQuery('(min-width:1280px)');
  return (
    <Container>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: '#f6f7fb',

          // border: 'none',
          borderTop: 1,
          borderBottom: 1,
          borderRadius: 0,

          height: matches ? 195 : 230,
          borderColor: '#E0E5EB',
          boxShadow: 'none',
          '&::-webkit-scrollbar': {
            width: 5,
          },
          '& MuiTableRow-head': {
            backgroundColor: '#B1B5C2',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(177, 181, 194, 0.2)',
            width: 10,

            marginTop: 5,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#B1B5C2',
            borderRadius: 2,
          },
        }}
      >
        <Table
          stickyHeader
          sx={{
            minWidth: 650,
            backgroundColor: '#f6f7fb',
            border: 'none',
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ color: 'white' }}>
            <TableRow>
              <TableCell width={matches ? 500 : 400} align="left">
                Book title
              </TableCell>
              <TableCell width={matches ? 200 : 160} align="left">
                Author
              </TableCell>
              <TableCell width={matches ? 100 : 92} align="left">
                Year
              </TableCell>
              <TableCell align="left">Pages</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {trainingList.map(row => (
              <TableRow
                key={row._id}
                sx={{
                  height: matches ? 37 : 62,
                  '&:last-of-type td, &:last-of-type th': { border: 0 },
                  [`& .${tableCellClasses.root}`]: {
                    borderBottom: matches ? 'none' : 1,
                    borderColor: '#E0E5EB',
                  },
                }}
              >
                <TableCell align="left">
                  <div className="title-container">
                    <BookIcon className="book-icon" /> <p>{row.title}</p>
                  </div>
                </TableCell>
                <TableCell align="left" className="author-container">
                  <p>{row.author}</p>
                </TableCell>
                <TableCell align="left">{row.publishYear}</TableCell>
                <TableCell align="left">{row.pagesTotal}</TableCell>
                <TableCell align="left">
                  <button
                    type="button"
                    onClick={() => {
                      removeFromTrainingListHandler(row._id);
                    }}
                    className="delete-button"
                  >
                    <DeleteIcon className="delete-icon" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow
              className="last-row"
              sx={{
                '&:last-of-type td, &:last-of-type th': { border: 0 },
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: 'none',
                },
              }}
            >
              <TableCell align="left">
                {' '}
                <div className="title-container">
                  <BookIcon className="book-icon" /> ...
                </div>
              </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
