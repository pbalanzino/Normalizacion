/** @format */

import knex from 'knex'
import { settings } from './sqlite3.settings.js'

export class SQLite3 {
  constructor() {
    this.knex = knex(settings)
  }

  static create = async (req, res) => {
    try {
      const { title, description, code, thumbnail, price, stock } = req.body
      const data = {
        title,
        description,
        code,
        thumbnail,
        price,
        stock,
      }
      const result = await this.knex('products').insert(data)
      res.send(result)
    } catch (err) {
      console.log(err)
      res.send('Error')
    }
  }

  static read = async (req, res) => {
    try {
      if (req.query.id) {
        return await this.knex('products').where('id', req.query.id).select()
      } else {
        return await this.knex('products').select()
      }
    } catch (error) {
      console.log(error)
      res.send('Error')
    }
  }

  static update = async (req, res) => {
    try {
      const { title, description, code, thumbnail, price, stock } = req.body
      const data = {
        title,
        description,
        code,
        thumbnail,
        price,
        stock,
      }
      const result = await this.knex('products')
        .where('id', req.query.id)
        .update(data)
      res.send(result)
    } catch (error) {
      console.log(error)
      res.send('Error')
    }
  }

  static delete = async (req, res) => {
    try {
      const result = await this.knex('products').where('id', req.query.id).del()
      res.send(result)
    } catch (error) {
      console.log(error)
      res.send('Error')
    }
  }
}
