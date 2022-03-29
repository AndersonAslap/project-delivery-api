interface ICreateClientDTO {
  username: string;
  password: string;
}

const clientDTO: ICreateClientDTO = {
  username: "Anderson",
  password: "aslap#1998"
}

export { ICreateClientDTO, clientDTO };
