/**
 *
 * Spread Operator
 *
 */

const obj = {
  name: 'tatán',
  age: 34,
  country: 'whatever',
};

const { country, ...all } = obj;
console.log(country, all);

const obj2 = {
  name: 'Chuck',
  age: '69',
};

const obj3 = {
  ...obj2,
  country: 'Murica',
};

console.log(obj3);

/**
 *
 * Promise Finally
 *
 */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    Math.random() < 0.5
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finish!'));

/**
 *
 * Regex
 *
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
