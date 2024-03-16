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

export type AuthUser = {
  email: string;
  accessToken: string;
  _id: string;
};

export type RegisteredUser = {
  accessToken: string;
  email: string;
  password: string;
  _createdOn: number;
  _id: string;
  //_id: "f551d4fc-5580-48bb-8c07-8a769a61bcc7"
};
