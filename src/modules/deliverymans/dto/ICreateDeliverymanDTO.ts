interface ICreateDeliverymanDTO {
    username: string;
    password: string;
}

const deliverymanDTO: ICreateDeliverymanDTO = {
    username: 'Anderson',
    password: 'password123'
}

export {
    ICreateDeliverymanDTO,
    deliverymanDTO
}