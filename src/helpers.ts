export function processBooksData(array) {
  // const dataX =

  const resultingObject = {};

  array.forEach(item => {
    const date = dateGetter(item.time);
    if (!resultingObject.hasOwnProperty(date)) {
      // return { ...resultingObject, date: item.pagesCount };
      resultingObject[date] = item.pagesCount;
    } else {
      //   acc[date] += item.pagesCount;
      // return { ...acc, date: (acc[date] += item.pagesCount) };
      resultingObject[date] += item.pagesCount;
    }
  });

  return resultingObject;
}

export function dateGetter(string) {
  const date = string.split(' ')[0];
  //   const date1 = date.replaceAll('-', '_');
  return date;
}

export function arraySum(arr, num) {
  if (num > arr.length || num < 0) {
    console.log('ERROR');
    return;
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

export function getCurrentBook(arr) {
  const currentBook = arr.find(item => item.pagesTotal !== item.pagesFinished);
  return currentBook;
}

export function getCurrentBookNumber(arr) {
  const currentBookIndex =
    arr.findIndex(item => item.pagesTotal !== item.pagesFinished) + 1;
  console.log('index');
  console.log(currentBookIndex);
  if (currentBookIndex === 0) {
    return arr.length + 1;
  }
  return currentBookIndex;
}
