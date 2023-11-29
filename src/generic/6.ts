/*
You have a user registration form. 
Sometimes you need to pre-fill the form with the user's data to update his profile. 
However, you don't always need to fill in all the fields. For example, the user may want to update only his email and password, leaving the first and last name unchanged.

Correct the type in the function argument so that there are no type errors.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};
