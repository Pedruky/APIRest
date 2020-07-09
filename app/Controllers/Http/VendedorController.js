'use strict'

const Vendedor = require("../../Models/Vendedor")

class VendedorController {

  async index ({ request, response, view }) {
    let vendedors = await Vendedor.query().fetch()
    return response.json(vendedors)
  }

  async store ({ request, response }) {
    const nombre = request.input('nombre')
    const cargo = request.input('cargo')
    const fechaNacimiento = request.input('fechaNacimiento')

    let vendedor = new Vendedor()

    vendedor.nombre = nombre
    vendedor.cargo = cargo
    vendedor.fechaNacimiento = fechaNacimiento
    await vendedor.save()

    return response.json(producto)
  }

  async update ({ params, request, response }) {
    const nombre = request.input('nombre')
    const cargo = request.input('cargo')
    const fechaNacimiento = request.input('fechaNacimiento')
    
    let vendedor = await Vendedor.find(params.id)

    vendedor.nombre = nombre
    vendedor.cargo = cargo
    vendedor.fechaNacimiento = fechaNacimiento
    await vendedor.save()
    return vendedor.json(vendedor)
  }

  async destroy ({ params, request, response }) {
    let vendedor = await  Vendedor.find(params.id)
    await vendedor.delete()
    return response.json({message: 'Vendedor Eliminado!'})
  }
}

module.exports = VendedorController
