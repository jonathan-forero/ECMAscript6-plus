/**
 *
 * Flat
 *
 */

const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));

/**
 *
 * TrimStart, TrimEnd
 *
 */

const hello = '    hello world';
console.log(hello);
console.log(hello.trimStart());

const bye = 'Bye world     ';
console.log(bye);
console.log(bye.trimEnd());

/**
 *
 * Optional Catch
 *
 */

try {
  // code here
} catch {
  // code here
}

/**
 *
 * From Entries
 *
 */

const entries = [
  ['name', 'tatan'],
  ['age', 34],
];

console.log(Object.fromEntries(entries));

/**
 *
 * Symbol
 *
 */

const mySymbol = 'My Symbol';
const symbol = Symbol(mySymbol);
console.log(symbol.description);
