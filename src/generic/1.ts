/*
You have a function getPromise() that returns a promise allowed in an array containing strings and numbers. Enhance this function using generics so that it returns the correct type.
*/

function getPromise(): Promise<[string, number]> {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}

getPromise().then(data => {
  console.log(data);
});

export {};
