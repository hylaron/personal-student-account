const Router = require('express')
const router = new Router()
const SheduleController = require('../controller/shedule/sheduleController')

router.get('/shedule', SheduleController.grNum)


module.exports = router
