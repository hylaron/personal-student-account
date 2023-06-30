const Router = require('express')
const router = new Router()
const ordersController = require('../controller/orders/ordersController')

router.get('/orders', ordersController.auth)


module.exports = router
