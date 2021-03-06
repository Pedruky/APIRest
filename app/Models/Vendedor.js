'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vendedor extends Model {
    ventas(){
        return this.hasMany('App/Models/Venta', 'id', 'idVendedor')
    }
}

module.exports = Vendedor
