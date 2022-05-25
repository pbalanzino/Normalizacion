/** @format */
import express from 'express'
import { Router } from 'express'
import { MariaDB } from '../SQL/products/MariaDB.products.js'

const { create, read, update, del } = MariaDB

const router = Router()
router.use(express.json())
router.get('/', read)
router.get('/:pid?', read)
router.post('/', create)
router.put('/:pid', update)
router.delete('/:pid', del)

export { router }
