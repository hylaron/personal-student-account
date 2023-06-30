const Router = require('express')
const router = new Router()

const loginRouter = require('./userRouter')
const sheduleRouter = require('./sheduleRouter')
const statRouter = require('./statRouter')
const gradeRouter = require('./gradeRouter')
const studentsPayRouter = require('./studentsPayRouter')
const ordersRouter = require('./ordersRouter')

router.use('/user', loginRouter)
router.use('/shedule', sheduleRouter)
router.use('/stat', statRouter)
router.use('/grade', gradeRouter)
router.use('/pay', studentsPayRouter)
router.use('/orders', ordersRouter)

module.exports = router