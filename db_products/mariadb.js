/** @format */

import knex from "knex";
import { mariadb } from "../src/config/config";

export const settings = {
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: mariadb,
        database: "ecommerce",
    },
};
