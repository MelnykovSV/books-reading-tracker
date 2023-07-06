import { Container } from './TrainingListActive.styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useAppSelector } from '../../redux/hooks';
import { getPlanningBooks } from '../../redux/planning/planningSlice';

export const TrainingListActive = () => {
  const planningBooks = useAppSelector(getPlanningBooks);

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
            {planningBooks.map(row => (
              <TableRow
                key={row._id}
                sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
              >
                <TableCell align="left">
                  {row.pagesTotal === row.pagesFinished ? 'true' : 'false'}' '
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="left">{row.publishYear}</TableCell>
                <TableCell align="left">{row.pagesTotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
