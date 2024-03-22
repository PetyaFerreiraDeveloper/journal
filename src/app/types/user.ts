export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export interface LoginAuthUser {
  email: string;
  accessToken: string;
  _id: string;
}

export interface RegisterAuthUser extends LoginAuthUser {
  _createdOn: number;
  //_id: "f551d4fc-5580-48bb-8c07-8a769a61bcc7"
}
