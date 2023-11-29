## TypeScript. Typing

### Basic Types

The purpose of this homework is to reinforce your skills in working with basic
TypeScript types. You will be working with types such as number, string,
boolean, null, undefined, unknown, any, as well as tuples, enums, and type
unions.

At the end of the homework, you will also practice creating your own type based
on existing objects. This will help you better understand how TypeScript can be
used to ensure type safety for your data and improve the quality of your code.

#### Task 1

Here is the JavaScript code:

```js
let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize;
let callback = a => {
  return 100 + a;
};
```

Convert this code to TypeScript, specifying the appropriate types for all
variables.

#### Task 2

A JavaScript variable can store a value of any type:

```js
let anything = -20;
anything = 'Text';
anything = {};
```

What type do you assign to the variable "anything" in TypeScript to preserve its
flexibility?

#### Task 3

In TypeScript, the `unknown` type allows us to store any value, but we can
directly assign an `unknown` variable to another variable only if we are
confident about its type. You have the following code:

```js
let some: unknown;
some = 'Text';
let str: string;
str = some;
```

What needs to be corrected in this code to make it correct and safe?

#### Task 4

You have the following JavaScript array:

```js
let person = ['Max', 21];
```

How to rewrite it in TypeScript, using the concept of tuples, to ensure that the
first element is always a string and the second one is a number?

#### Task 5

How would you define a variable in TypeScript that can take either a string or a
number (union type)? And similarly, define a variable that can only take one of
two string values: 'enable' or 'disable' (literal type)?

#### Task 6

You have the following JavaScript functions:

```js
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error('Error');
}
```

How would you specify the types for the arguments and the return values of these
functions in TypeScript?

#### Task 7

Create a function (isWeekend) that takes a day of the week (from your enum) and
returns a boolean value indicating whether it's a working day or a weekend.

#### Task 8

Create a type "Gender" using a union type that can contain the values "male" or
"female". Create a variable myGender of this type.

#### Task 9

You have two objects:

```js
const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
```

Create a new data type that suits these two objects.

---

### Generic

#### Task 1

Here is a function getPromise() that returns a promise allowing an array
containing strings and numbers. Enhance this function using generics to make it
return the correct type.

```js
function getPromise() {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}

getPromise().then(data => {
  console.log(data);
});
```

#### Task 2

You have the type `AllType`. There is a function compare that takes two objects.
These objects have fields of `AllType`. Your task is to use Pick and generics to
indicate that the fields of these objects belong to `AllType`. The compare
function should return `AllType`.

```js
type AllType = {
  name: string,
  position: number,
  color: string,
  weight: number,
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
```

#### Task 3

You have the function merge, which merges two objects. Use generics to indicate
that these objects can be of any type.

```js
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
```

#### Task 4

Use generics and interfaces to fix the error in the following classes:

```js
class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}
```

#### Task 5

You need to implement the KeyValuePair interface that describes a key-value
pair. Use generics to make this interface work with any key and value types.

```js
interface KeyValuePair {
  key;
  value;
}
```

#### Task 6

You have a user registration form. Occasionally, you may need to pre-fill the
form with user data to update their profile. However, you don't always have to
fill in all the fields. For instance, a user might want to update only their
email and password, leaving the first and last name unchanged.

Correct the type in the function argument to avoid any type errors.

```js
type User = {
  name: string,
  surname: string,
  email: string,
  password: string,
};

function createOrUpdateUser(initialValues: User) {
  // User Update
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
```

#### Task 7

You have a UserRole list used for classifying users in your application. You
want to create a RoleDescription object that will associate each user role with
its description.

```js
export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Replace the following code with the version using Record
const RoleDescription = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
```

#### Task 8

You have a Form type that contains information about the form, including an
errors field. You want to create a new Params type that includes all fields from
the Form except errors.

```js
type Errors = {
  email?: string[],
  firstName?: string[],
  lastName?: string[],
  phone?: string[],
};

type Form = {
  email: string | null,
  firstName: string | null,
  lastName: string | null,
  phone: string | null,
  errors: Errors,
};

// Implement Params to disable the 'errors' field from the Form type
type Params = Form;
``;
```
