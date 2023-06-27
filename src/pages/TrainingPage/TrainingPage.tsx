import { Container } from './TrainingPage.styled';
// import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { Autocomplete } from '@mui/material';
// import TextField from '@mui/material/TextField';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

import { LineChart } from '@mui/x-charts/LineChart';

// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   CartesianAxis,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from 'recharts';

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 4500, 3908, 4800, 3800, 4300];
// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const TrainingPage = () => {
  console.log(AdapterDayjs);
  return (
    <Container>
      {/* TrainingPage
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
      </LocalizationProvider>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[
          { label: 'The Shawshank Redemption', year: 1994 },
          { label: 'The Godfather', year: 1972 },
          { label: 'The Godfather: Part II', year: 1974 },
          { label: 'The Dark Knight', year: 2008 },
          { label: '12 Angry Men', year: 1957 },
          { label: "Schindler's List", year: 1993 },
          { label: 'Pulp Fiction', year: 1994 },
          {
            label: 'The Lord of the Rings: The Return of the King',
            year: 2003,
          },
          { label: 'The Good, the Bad and the Ugly', year: 1966 },
          { label: 'Fight Club', year: 1999 },
          {
            label: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
          },
          {
            label: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
          },
          { label: 'Forrest Gump', year: 1994 },
          { label: 'Inception', year: 2010 },
          {
            label: 'The Lord of the Rings: The Two Towers',
            year: 2002,
          },
          { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
          { label: 'Goodfellas', year: 1990 },
          { label: 'The Matrix', year: 1999 },
          { label: 'Seven Samurai', year: 1954 },
          {
            label: 'Star Wars: Episode IV - A New Hope',
            year: 1977,
          },
          { label: 'City of God', year: 2002 },
          { label: 'Se7en', year: 1995 },
          { label: 'The Silence of the Lambs', year: 1991 },
          { label: "It's a Wonderful Life", year: 1946 },
          { label: 'Life Is Beautiful', year: 1997 },
          { label: 'The Usual Suspects', year: 1995 },
          { label: 'Léon: The Professional', year: 1994 },
          { label: 'Spirited Away', year: 2001 },
          { label: 'Saving Private Ryan', year: 1998 },
          { label: 'Once Upon a Time in the West', year: 1968 },
          { label: 'American History X', year: 1998 },
          { label: 'Interstellar', year: 2014 },
          { label: 'Casablanca', year: 1942 },
          { label: 'City Lights', year: 1931 },
          { label: 'Psycho', year: 1960 },
          { label: 'The Green Mile', year: 1999 },
          { label: 'The Intouchables', year: 2011 },
          { label: 'Modern Times', year: 1936 },
          { label: 'Raiders of the Lost Ark', year: 1981 },
          { label: 'Rear Window', year: 1954 },
          { label: 'The Pianist', year: 2002 },
          { label: 'The Departed', year: 2006 },
          { label: 'Terminator 2: Judgment Day', year: 1991 },
          { label: 'Back to the Future', year: 1985 },
          { label: 'Whiplash', year: 2014 },
          { label: 'Gladiator', year: 2000 },
          { label: 'Memento', year: 2000 },
          { label: 'The Prestige', year: 2006 },
          { label: 'The Lion King', year: 1994 },
          { label: 'Apocalypse Now', year: 1979 },
          { label: 'Alien', year: 1979 },
          { label: 'Sunset Boulevard', year: 1950 },
          {
            label:
              'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
            year: 1964,
          },
          { label: 'The Great Dictator', year: 1940 },
          { label: 'Cinema Paradiso', year: 1988 },
          { label: 'The Lives of Others', year: 2006 },
          { label: 'Grave of the Fireflies', year: 1988 },
          { label: 'Paths of Glory', year: 1957 },
          { label: 'Django Unchained', year: 2012 },
          { label: 'The Shining', year: 1980 },
          { label: 'WALL·E', year: 2008 },
          { label: 'American Beauty', year: 1999 },
          { label: 'The Dark Knight Rises', year: 2012 },
          { label: 'Princess Mononoke', year: 1997 },
          { label: 'Aliens', year: 1986 },
          { label: 'Oldboy', year: 2003 },
          { label: 'Once Upon a Time in America', year: 1984 },
          { label: 'Witness for the Prosecution', year: 1957 },
          { label: 'Das Boot', year: 1981 },
          { label: 'Citizen Kane', year: 1941 },
          { label: 'North by Northwest', year: 1959 },
          { label: 'Vertigo', year: 1958 },
          {
            label: 'Star Wars: Episode VI - Return of the Jedi',
            year: 1983,
          },
          { label: 'Reservoir Dogs', year: 1992 },
          { label: 'Braveheart', year: 1995 },
          { label: 'M', year: 1931 },
          { label: 'Requiem for a Dream', year: 2000 },
          { label: 'Amélie', year: 2001 },
          { label: 'A Clockwork Orange', year: 1971 },
          { label: 'Like Stars on Earth', year: 2007 },
          { label: 'Taxi Driver', year: 1976 },
          { label: 'Lawrence of Arabia', year: 1962 },
          { label: 'Double Indemnity', year: 1944 },
          {
            label: 'Eternal Sunshine of the Spotless Mind',
            year: 2004,
          },
          { label: 'Amadeus', year: 1984 },
          { label: 'To Kill a Mockingbird', year: 1962 },
          { label: 'Toy Story 3', year: 2010 },
          { label: 'Logan', year: 2017 },
          { label: 'Full Metal Jacket', year: 1987 },
          { label: 'Dangal', year: 2016 },
          { label: 'The Sting', year: 1973 },
          { label: '2001: A Space Odyssey', year: 1968 },
          { label: "Singin' in the Rain", year: 1952 },
          { label: 'Toy Story', year: 1995 },
          { label: 'Bicycle Thieves', year: 1948 },
          { label: 'The Kid', year: 1921 },
          { label: 'Inglourious Basterds', year: 2009 },
          { label: 'Snatch', year: 2000 },
          { label: '3 Idiots', year: 2009 },
          { label: 'Monty Python and the Holy Grail', year: 1975 },
        ]}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label="Movie" />}
      /> */}
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      {/* <LineChart
        width={500}
        height={300}
        series={[
          { data: pData, label: 'pv' },
          { data: uData, label: 'uv' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
      /> */}

      {/* <LineChart
        width={600}
        height={300}
        data={[
          { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
          { name: 'Page A', uv: 5000, pv: 5400, amt: 5400 },
          { name: 'Page A', uv: 200, pv: 3500, amt: 5400 },
          { name: 'Page A', uv: 400, pv: 1400, amt: 5400 },
        ]}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          activeDot={{ stroke: '#ff0000', strokeWidth: 2, r: 5 }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 0" horizontal={false} />
        <CartesianAxis width={5} x={100} />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart> */}
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />
    </Container>
  );
};

export default TrainingPage;
