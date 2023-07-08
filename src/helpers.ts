import { IBookData } from './interfaces';

export function processBooksData(array: any) {
  const resultingObject = {} as any;

  array.forEach((item: any) => {
    const date = dateGetter(item.time);
    if (!resultingObject.hasOwnProperty(date)) {
      resultingObject[date] = item.pagesCount;
    } else {
      resultingObject[date] += item.pagesCount;
    }
  });

  return resultingObject;
}

export function dateGetter(string: string) {
  const date = string.split(' ')[0];
  return date;
}

export function arraySum(arr: [], num: number) {
  if (num > arr.length || num < 0) {
    console.log('ERROR');
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
  console.log('index');
  console.log(currentBookIndex);
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
