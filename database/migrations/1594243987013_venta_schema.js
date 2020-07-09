'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VentaSchema extends Schema {
  up () {
    this.create('ventas', (table) => {
      table.increments()
      table.integer('idVendedor').unsigned().references('id').inTable('vendedors');
      table.integer('idProducto').unsigned().references('id').inTable('productos');
      table.string('nombreCliente', 255)
      table.float('comision', 11, 2)
      table.text('descripcionComision')
      table.string('fechaPago', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('ventas')
  }
}

module.exports = VentaSchema
