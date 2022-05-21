/** @format */

import knex from "knex";
import __dirname from "../utils.js";

const knex = {
    client: "sqlite3",
    connection: {
        filename: `${__dirname}/db`,
    },
    migrations: {
        tableName: "knex_migrations",
    },
    useNullAsDefault: true,
};
