const Router = require('express')
const router = new Router()
const gradeController = require('../controller/grade/gradeController')

router.get('/grade', gradeController.grNum)


module.exports = router
