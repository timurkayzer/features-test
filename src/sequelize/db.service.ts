import { Sequelize } from "sequelize";
import { PG_CONN_STRING } from "src/constants";

export class DbService {


    private connection: Sequelize;

    public connect() {
        this.connection = new Sequelize(PG_CONN_STRING);
        this.connection.authenticate();
    }

    public disconnect() {
        this.connection.close();
    }
}