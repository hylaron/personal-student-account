const Router = require('express')
const router = new Router()
const SheduleController = require('../controller/studentsPay/studentsPayController')

router.get('/pay', SheduleController.grNum)


module.exports = router
