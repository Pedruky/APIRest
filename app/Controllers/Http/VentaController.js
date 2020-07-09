'use strict'

class VentaController {

  async index ({ request, response, view }) {
    let ventas = await Venta.query().fetch()
    return response.json(ventas)
  }

  async store ({ request, response }) {
    const idVendedor = request.input('idVendedor')
    const idProducto = request.input('idProducto')
    const nombreCliente = request.input('nombreCliente')
    const comision = request.input('comision')
    const descripcionComision = request.input('descripcionComision')
    const fechaPago = request.input('fechaPago')

    let venta = new Venta()

    venta.nombre = nombre
    venta.cargo = cargo
    venta.fechaNacimiento = fechaNacimiento
    venta.nombre = nombre
    venta.cargo = cargo
    venta.fechaNacimiento = fechaNacimiento

    await venta.save()
    return response.json(venta)
  }

  async update ({ params, request, response }) {
    const idVendedor = request.input('idVendedor')
    const idProducto = request.input('idProducto')
    const nombreCliente = request.input('nombreCliente')
    const comision = request.input('comision')
    const descripcionComision = request.input('descripcionComision')
    const fechaPago = request.input('fechaPago')

    let venta = await Venta.find(params.id)

    venta.idVendedor = idVendedor
    venta.idProducto = idProducto
    venta.nombreCliente = nombreCliente
    venta.comision = comision
    venta.descripcionComision = descripcionComision
    venta.fechaPago = fechaPago

    await venta.save()
    return response.json(venta)
  }

  async destroy ({ params, request, response }) {
    let venta = await Venta.find(params.id)
    await venta.delete()
    return response.json({message: 'Ventas Eliminado!'})
  }
}

module.exports = VentaController
