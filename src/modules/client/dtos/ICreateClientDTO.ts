interface ICreateClientDTO {
  username: string;
  password: string;
}

const clientDTO: ICreateClientDTO = {
  username: "Anderson",
  password: "aslap#1998"
}

const clientDTO_2: ICreateClientDTO = {
  username: "Anderson",
  password: "aslap#1998"
}

export { ICreateClientDTO, clientDTO, clientDTO_2 };
