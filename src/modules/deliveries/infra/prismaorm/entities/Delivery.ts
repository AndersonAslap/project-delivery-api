import { v4 as uuidv4 } from "uuid";

class Delivery {
    id?: string;
    id_client: string;
    id_deliveryman?: string;
    item_name?: string;
    created_at: Date;
    end_date?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Delivery };