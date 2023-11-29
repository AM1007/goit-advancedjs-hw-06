/*
  You have a list of UserRoles used to classify users in your application. 
  You want to create an object, RoleDescription, that will associate each user role with its description.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

export {};
