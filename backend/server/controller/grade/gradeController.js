const ApiError = require('../../error/ApiError')

const SSHConnection = require("../../DBc1student.js");

class GradeController {
        async login(req, res){
                const {id_student} = req.body
                const idStudent = await Grade.findOne({where: {id_student}})
                if (!idStudent) {
                return next (ApiError.internal('Пользователь с таким id не найден'))
                }
        }

        grNum(req, res, next) {
                const {id_student} = req.query
                if (!id_student) {
                        return next(ApiError.badRequest('Не задан id_student'))
                }
                console.log('---------------------------------')

              SSHConnection.then((conn) => {
                        try { //201157623
                                conn.query(`
                                SELECT smalp.semestr, smalp.type, smt.name, smalp.subject_name, smalp.data, smalp.timestamp from student_mark_and_learning_plan AS smalp
                                JOIN student_marks_type AS smt ON 
                                smalp.mark = smt.id
                                WHERE id_student = ${id_student}
                                order by 1`
                                , (err, result, fields) => {
                                        if (err || result === []) throw err; 
                                        console.log(`SQL Query Result-- ${id_student}`, result)
                                        
                                        if (result.length !== 0) {  //considering SQL Select statement
                                                res.json(result) 
                                            //perform your required work on result
                                        }
                                        console.log(result)
                                        return
                            
                                    });   
                        } catch (error) {
                                if (result.length !== 0) {  //considering SQL Select statement
                                        result;
                                        //perform your required work on result
                                }
                                return
                        }
                        

                
                    })
                
                
        
        }
}

module.exports = new GradeController()