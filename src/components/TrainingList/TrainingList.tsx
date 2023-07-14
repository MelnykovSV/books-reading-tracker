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
          maxHeight: matches ? 212 : 227,
          borderColor: '#E0E5EB',
          boxShadow: 'none',
          '&::-webkit-scrollbar': {
            width: 5,
            // height: 100,
          },
          '& MuiTableRow-head': {
            backgroundColor: '#B1B5C2',
            // height: 100,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(177, 181, 194, 0.2)',
            width: 10,

            marginTop: 7,
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
              <TableCell align="left">Book title</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Year</TableCell>
              <TableCell align="left">Pages</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {trainingList.map(row => (
              <TableRow
                key={row._id}
                // sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
                sx={{
                  '&:last-of-type td, &:last-of-type th': { border: 0 },
                  [`& .${tableCellClasses.root}`]: {
                    borderBottom: 'none',
                  },
                }}
              >
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="left">{row.publishYear}</TableCell>
                <TableCell align="left">{row.pagesTotal}</TableCell>
                <TableCell align="left">
                  <button
                    type="button"
                    onClick={() => {
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
