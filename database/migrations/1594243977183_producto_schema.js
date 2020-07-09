'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('nombre', 255)
      table.text('descripcion')
      table.float('precio', 11, 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
