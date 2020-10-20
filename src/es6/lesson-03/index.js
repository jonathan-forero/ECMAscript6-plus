/**
 *
 * Parameters in Objects
 *
 */

const name = 'Tatán';
const age = 34;

const obj = {
  name,
  age,
};

console.log(obj);

/**
 *
 * Arrow Functions
 *
 */

const names = [
  { name: 'Tatán', age: 34 },
  { name: 'Cupcake', age: 33 },
];

const namesList = names.map(item => item.name);

console.log(namesList);

/**
 *
 * Promises
 *
 */

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve('Hey!');
    } else {
      reject('Oops!');
    }
  });
};

helloPromise()
  .then(reponse => console.log(reponse))
  .then(() => console.log('Hello There!'))
  .catch(error => console.log(error));
