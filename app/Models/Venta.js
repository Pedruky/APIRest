'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venta extends Model {
    vendedor(){
        return this.belongsTo('App/Models/Vendedor', 'idVendedor', 'id')
    }
    producto(){
        return this.belongsTo('App/Models/Producto', 'idProducto', 'id')
    }
}

module.exports = Venta
