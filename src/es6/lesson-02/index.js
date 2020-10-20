/**
 *
 * Multi Line
 *
 */

const lorem = `
 Hello
 multi
 line`;

console.log(lorem);

/**
 *
 * Object Destructuring
 *
 */

const person = {
  name: 'Donald Trompeta',
  age: 69,
  country: 'Whatever',
};

const { name, country } = person;
console.log(name, country);

/**
 *
 * Spread Operator
 *
 */

const team1 = ['Huey', 'Dewey', 'Louie'];
const team2 = ['Quentin', 'Leo', 'Brad'];
const newTeam = ['Steve', ...team1, ...team2];
console.log(newTeam);
