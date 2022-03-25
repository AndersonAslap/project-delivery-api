class Client {
  id?: string;

  username: string;

  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export { Client };
