const ApiError = require('../../error/ApiError')

const SSHConnection = require("../../DBc1student.js");

class SheduleController {
        async login(req, res) {
                const { gr_num } = req.body
                const shedule = await Shedule.findOne({ where: { gr_num } })
                if (!shedule) {
                        return next(ApiError.internal('Пользователь с таким номером группы не найден'))
                }
        }

        grNum(req, res, next) {
                const { gr_num } = req.query
                if (!gr_num) {
                        return next(ApiError.badRequest('Не задан gr_num'))
                }
                console.log('---------------------------------')

                SSHConnection.then((conn) => {
                        try {
                                conn.query(`SELECT * from student_shedule where gr_num like '${gr_num}%'`, (err, result, fields) => {
                                        if (err || result === []) throw err;
                                        console.log(`SQL Query Result-- ${gr_num}`, result)

                                        if (result.length !== 0) {
                                                res.json(result)
                                        }
                                        console.log(result)
                                        return

                                });
                        } catch (error) {
                                if (result.length !== 0) {
                                        result;
                                }
                                return
                        }



                })



        }
}

module.exports = new SheduleController()