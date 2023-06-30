const ApiError = require('../../error/ApiError')

const SSHConnection = require("../../DBc1student.js");

class OrdersController {
        async login(req, res){
                const {card} = req.body
                const user = await User.findOne({where: {card}})
                if (!user) {
                return next (ApiError.internal('Пользователь с таким номером карты не найден'))
                }
        }

        auth(req, res, next) {
                const {card} = req.query
                if (!card) {
                        return next(ApiError.badRequest('Не задан card'))
                }
                console.log('---------------------------------')

              SSHConnection.then((conn) => {
                        try {
                                conn.query(`
                                    SELECT * FROM student_order AS so
                                    JOIN student_personal_data AS spd ON spd.id_student=so.id_student 
                                    where spd.card_number = ${card}`
                                    
                                    , (err, result, fields) => {
                                        if (err || result === []) throw err; 
                                        console.log(`SQL Query Result-- ${card}`, result)
                                        
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

module.exports = new OrdersController()