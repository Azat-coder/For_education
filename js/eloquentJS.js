const drawTriangle = function () { 
  for (let i = 1; i < 8; i++) {
    console.log('#'.repeat(i));
  }
}

const fizzBuzz = () => {
  for (let i = 0; i < 100; i++) {
    if (i%3 === 0) {
      console.log('fizz');
    } else if (i%5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

const chessBoard = () => {
  const calculateString = (type) => {
    let string = '';
    for (let i = 0; i < 8; i++) {
      if (string[string.length - 1] == ' ') {
        string += '#';
      } else if (string[string.length - 1] == '#') {
        string += ' ';
      } else if (type === 'left') {
        string += '#';
      } else {
        string += ' ';
      }
    }

    return string;
  }

  for(let i = 0; i < 8; i++) {
    if (i%2 === 0) {
      console.log(calculateString('left'));
    } else {
      console.log(calculateString());
    }
  }
}

const min = (a, b) => {
  if (a <= b ) {
    return a
  } else {
    return b
  }
}

const isEven = (x) => {
  if (x === 0) {
    return 'true';
  } else if (x === 1) {
    return 'false';
  } else {
    return isEven(x - 2);
  }
}

const countBs = (str, symbol) => {
  let counter = 0;

  for (let i = 0; i <str.length; i++) {
    if (str[i] === symbol) {
      counter++;
    }
  }

  return counter;
}

const range = (start, end) => {
  let result = [];
  let num = start;

  while (num <= end) {
    result.push(num);
    num++;
  }

  return result;
}

const sum = (array) => {
  let result = 0;

  for (let num of array) {
    result += num;
  }

  return result;
}

const stepRange = (start, end, step) => {
  let result = [];
  let num = start;

  while (num <= end) {
    result.push(num);
    if (step) {
      num += step;
    } else {
      num++;
    }
  }

  return result;
}

const reverseArray = (array) => {
  const newArray = [];
  let arrElement = array.length;

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[arrElement -1]);
    arrElement--;
  }

  return newArray;
}

const reverseArrayInPlace = (array) => {
  let arrLen = array.length;
  let arrCopy = array.slice(0, arrLen);

  for (let i = 0; i < array.length; i++) {
    array[i] = arrCopy[arrLen-1];
    arrLen--;
  }

  return array;
};

const arrayToList = (array) => {
  const list = {};
  let currentList;

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      list.value = array[0];
      list.rest = {};
      currentList = list.rest;
    } else {
      let list = currentList;
      list.value = array[i];
      list.rest = {};
      currentList = list.rest;
    }
  }

  return list;
}

const prependToList = (list, elem) => {
  let newList = {};
  newList.value = elem;
  newList.rest = list;
  return newList;
}

const nth = (list, index) => {
  let currentList = list;
  

  for (let i = 0; i < index; i++) {
    let current = currentList;
    currentList = current.rest;
  }

  let currentValue = currentList.value;
  return currentValue;
}

const nthRec = (list, index) => {
  if (index === 0) {
    return list.value;
  } else {
    return nthRec(list.rest, --index);
  }
}

function deepEqual(a, b) {
  if (a instanceof Number || a instanceof String || a instanceof Boolean || a instanceof Date) {
      a = a.valueOf();
  }
  if (b instanceof Number || b instanceof String || b instanceof Boolean || b instanceof Date) {
      b = b.valueOf();
  }

  if (a === b) {
      return true;
  }

  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
      return false;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
  }

  for (var prop in b) {
      if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
          return false;
      }
  }

  return true;
}


export { drawTriangle, fizzBuzz, chessBoard, min, isEven, countBs, range, sum, stepRange, reverseArray, reverseArrayInPlace, arrayToList, prependToList, nth, nthRec, deepEqual };