import { IBookData, IPlanningStat } from './interfaces';
import dayjs from 'dayjs';

export function processBooksData(array: any) {
  const resultingObject = {} as any;

  array.forEach((item: any) => {
    const date = extractDate(item.time);
    if (!resultingObject.hasOwnProperty(date)) {
      resultingObject[date] = item.pagesCount;
    } else {
      resultingObject[date] += item.pagesCount;
    }
  });

  return resultingObject;
}

export function extractDate(string: string) {
  const date = string.split(' ')[0];
  return date;
}

export function arraySum(arr: [], num: number) {
  if (num > arr.length || num < 0) {
    return 0;
  }
  if (num === 0) {
    return 0;
  }
  let result = 0;
  arr.forEach((item, i) => {
    if (i < num) {
      result += item;
    }
  });

  return result;
}

export function getCurrentBook(arr: any) {
  const currentBook = arr.find(
    (item: any) => item.pagesTotal !== item.pagesFinished
  );
  return currentBook;
}

export function getCurrentBookNumber(arr: IBookData[]) {
  const currentBookIndex =
    arr.findIndex(item => item.pagesTotal !== item.pagesFinished) + 1;

  if (currentBookIndex === 0) {
    return arr.length + 1;
  }
  return currentBookIndex;
}

export function timeDifferenceProcessor(t: number) {
  const d = Math.floor(t / (1000 * 60 * 60 * 24));
  const h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((t % (1000 * 60)) / 1000);
  return { d, h, m, s };
}

export function formatDate(date: string) {
  const splittedDate = date.split('-');
  splittedDate[1] = splittedDate[1].padStart(2, '0');
  splittedDate[2] = splittedDate[2].padStart(2, '0');
  const formattedDate = splittedDate.join('-');
  return formattedDate;
}

export function formatPlanningStatsArray(statsArray: IPlanningStat[]) {
  const formattedStatsArray = statsArray.map(item => {
    const splittedString = item.time.split(' ');
    const formattedDate = formatDate(splittedString[0]);
    splittedString[0] = formattedDate;
    item.time = splittedString.join(' ');
    return item;
  });

  return formattedStatsArray;
}

export function generateDatesArray(
  startDateString: string,
  endDateString: string
) {
  const startDate = dayjs(startDateString);
  const endDate = dayjs(endDateString);
  const result = [];
  let dateAccumulator = startDate.format('YYYY-MM-DD');
  while (dateAccumulator !== endDate.format('YYYY-MM-DD')) {
    result.push(dateAccumulator);
    dateAccumulator = dayjs(dateAccumulator).add(1, 'day').format('YYYY-MM-DD');
  }
  result.push(dateAccumulator);

  return result;
}

export function generateTemplateObject(arr: string[]) {
  const templateObject = {} as {
    [key: string]: { actual: number; plan: number };
  };
  arr.forEach(
    (item: string) => (templateObject[item] = { actual: 0, plan: 0 })
  );
  return templateObject;
}

export function processPlanningStats(
  dataArray: IPlanningStat[],
  startDate: string,
  endDate: string,
  totalPagestoRead: number
) {
  const fullDatesArray = generateDatesArray(startDate, endDate);
  const totalDays = fullDatesArray.length;
  let pagesRead = 0;
  const pastDatesArray = generateDatesArray(
    startDate,
    dayjs().format('YYYY-MM-DD')
  );

  const templateObject = generateTemplateObject(pastDatesArray);

  const result = dataArray.reduce(
    (acc, item) => {
      const date = extractDate(item.time);

      acc[date].actual += item.pagesCount;
      return acc;
    },
    { ...templateObject }
  );

  pastDatesArray.forEach((item, i) => {
    result[item].plan = Math.round(
      (totalPagestoRead - pagesRead) / (totalDays - i)
    );
    pagesRead += result[item].actual;
  });
  console.log(result);
  const resultArray = [];

  for (const key in result) {
    resultArray.push({
      name: key,
      actual: result[key].actual as number | null,
      plan: result[key].plan || null,
    });
  }

  console.log(resultArray);

  return resultArray;
}

export function calculateLabelCoordinates(act: number, plan: number) {
  const dif = act - plan;

  if (dif > 0 && dif < 43) {
    return { actCorrection: 43, planCorrection: 0 };
  }
  if (dif <= 0 && dif > -43) {
    return { actCorrection: 0, planCorrection: 43 };
  } else {
    return { actCorrection: 0, planCorrection: 0 };
  }
}
