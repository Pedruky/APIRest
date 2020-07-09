'use strict'

const Route = use('Route')

Route.put('/api/productos/:id', 'ProductoController.update')
Route.delete('/api/productos/:id', 'ProductoController.destroy')
Route.post('/api/productos', 'ProductoController.store')
Route.get('/api/productos', 'ProductoController.index')

Route.put('/api/vendedores/:id', 'VendedorController.update')
Route.delete('/api/vendedores/:id', 'VendedorController.destroy')
Route.post('/api/vendedores', 'VendedorController.store')
Route.get('/api/vendedores', 'VendedorController.index')

Route.put('/api/ventas/:id', 'VentaController.update')
Route.delete('/api/ventas/:id', 'VentaController.destroy')
Route.post('/api/ventas', 'VentaController.store')
Route.get('/api/ventas', 'VentaController.index')
