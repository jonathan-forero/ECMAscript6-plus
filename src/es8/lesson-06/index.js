/**
 *
 * Object Entries
 *
 */

const data = {
  frontend: 'Chuck',
  backend: 'Norris',
  design: 'Keanu',
};

const entries = Object.entries(data);
console.log(entries);

/**
 *
 * Object Values
 *
 */

const values = Object.values(data);
console.log(values);

/**
 *
 * Padding
 *
 */

const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(11, ' tatán'));
