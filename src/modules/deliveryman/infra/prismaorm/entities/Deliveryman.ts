import { v4 as uuidv4 } from "uuid";

class Deliveryman {
    id?: string;
    username: string;
    password: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Deliveryman };