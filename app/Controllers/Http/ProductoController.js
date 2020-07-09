'use strict'

class ProductoController {
  
  async index ({ request, response, view }) {
    let productos = await Producto.query().fetch()
    return response.json(productos)
  }

  async store ({ request, response }) {
    const nombre = request.input('nombre')
    const descripcion = request.input('descripcion')
    const precio = request.input('precio')
    
    const producto = new Producto()

    producto.nombre = nombre
    producto.descripcion = descripcion
    producto.precio = precio

    await producto.save()
    return response.json(producto)
  }

  async update ({ params, request, response }) {
    const nombre = request.input('nombre')
    const descripcion = request.input('descripcion')
    const precio = request.input('precio')

    let producto = await Producto.find(params.id)

    producto.nombre = nombre
    producto.descripcion = descripcion
    producto.precio = precio
    
    await producto.save()
    return response.json(producto)
  }

  async destroy ({ params, request, response }) {
    let producto = await  Producto.find(params.id)
    await producto.delete()
    return response.json({message: 'Producto Eliminado!'})
  }
}

module.exports = ProductoController
