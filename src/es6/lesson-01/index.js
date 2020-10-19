/**
 *
 * Default Params
 *
 */

function anotherFunction(
  name = 'Keanu Reeves',
  age = 50,
  country = 'The Matrix',
) {
  console.log(name, age, country);
}

anotherFunction();
anotherFunction('Chuck Norris', '70', 'Whatever');

/**
 *
 * Template Literals
 *
 */

const hello = 'Hello';
const world = 'World';
const epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);
