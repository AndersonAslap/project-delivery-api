interface ICreateDeliverimanDTO {
    username: string;
    password: string;
}

const deliverimanDTO: ICreateDeliverimanDTO = {
    username: 'Anderson',
    password: 'password123'
}

export {
    ICreateDeliverimanDTO,
    deliverimanDTO
}