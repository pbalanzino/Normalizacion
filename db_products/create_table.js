/** @format */

import { settings } from "./mariadb.js";
import knex from "knex";

knex.schema
    .createTable("products", (table) => {
        table.increments("id").primary();
        table.timestamps(true, true);
        table.string("title");
        table.string("description");
        table.string("code");
        table.string("thumbnail");
        table.integer("price");
        table.integer("stock");
    })
    .then(() => {
        console.log("Table created");
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
