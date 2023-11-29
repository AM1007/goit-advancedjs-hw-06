/*
  You have a function merge that combines two objects. Use generics to indicate that these objects can be of any type.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

export {};
