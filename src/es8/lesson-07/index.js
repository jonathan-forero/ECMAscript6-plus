/**
 *
 * Async Await
 *
 */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    Math.random() < 0.5
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
