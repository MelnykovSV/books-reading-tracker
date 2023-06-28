import { Container } from './TrainingList.styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ITrainingList } from '../../interfaces';

export const TrainingList = ({
  trainingList,
  removeFromTrainingListHandler,
}: ITrainingList) => {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Book title</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Year</TableCell>
              <TableCell align="left">Pages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainingList.map(row => (
              <TableRow
                key={row._id}
                sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
              >
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="left">{row.publishYear}</TableCell>
                <TableCell align="left">{row.pagesTotal}</TableCell>
                <TableCell align="left">
                  <button
                    type="button"
                    onClick={() => {
                      console.log(row);
                      removeFromTrainingListHandler(row._id);
                    }}
                  >
                    D
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
