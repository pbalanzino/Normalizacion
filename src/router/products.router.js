/** @format */
import express from "express";
import { Router } from "express";
import { create, read, update, del } from "../SQL/products/MariaDB.products.js";

const router = Router();
router.use(express.json());
router.get("/", read);
router.get("/:pid?", read);
router.post("/", create);
router.put("/:pid", update);
router.delete("/:pid", del);

export { router };
