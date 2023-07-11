import dayjs from 'dayjs';

const startDateString = '2023-07-02';
const endDateString = '2023-07-10';

const startDate = dayjs(startDateString);
const endDate = dayjs(endDateString);
// const currentDate = dayjs();

function generateDatesArray(startDate, endDate) {
  const result = [];
  const dateAccumulator = startDate;
  while (dateAccumulator !== endDate) {
    result.push(dateAccumulator);
    dateAccumulator.add(1, 'day');
  }

  result.push(dateAccumulator);

  return result;
}

console.log(generateDatesArray(startDate, endDate));
