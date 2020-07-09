'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VendedorSchema extends Schema {
  up () {
    this.create('vendedors', (table) => {
      table.increments()
      table.string('nombre', 255)
      table.string('cargo', 150)
      table.string('fechaNacimiento', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('vendedors')
  }
}

module.exports = VendedorSchema
