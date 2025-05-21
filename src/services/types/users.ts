export interface IUsersAddresses {
  street?: string,
  suite?: string,
  city?: string,
}

export interface IUsers {
  id?: number,
  name?: string,
  username?: string,
  password?: string,
  email?: string,
  address?: IUsersAddresses
}

export const anyUsers = [
  { id: "1", userName: "Bret", email: "Sincere@april.biz", password: "user@1" },
  { id: "2", userName: "Antonetta", email: "Shanna@melissa.tv", password: "user@2" }
];