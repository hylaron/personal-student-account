const ApiError = require('../../error/ApiError');
const SSHConnection = require("../../DBc1student.js");

class UserController {
  async login(req, res, next) {
    const { card } = req.body;
    const user = await User.findOne({ where: { card } });
    if (!user) {
      return next(ApiError.internal('Пользователь с таким номером карты не найден'));
    }
  }

  auth(req, res, next) {
    const { card } = req.query;
    if (!card) {
      return next(ApiError.badRequest('Не задан card'));
    }
    console.log('---------------------------------');

    SSHConnection.then((conn) => {
      try {
        
        conn.query(`SELECT * from student_personal_data where card_number = ${card}`, (err, result, fields) => {
          if (err) throw err;
          console.log(`SQL Query Result-- ${card}`, result);

          if (result.length !== 0) {
            res.json(result);
            // Выполните необходимые действия с результатом
          } else {
            next(ApiError.internal('Пользователь с таким номером карты не найден'));
          }
        });
      } catch (error) {
        next(error);
      }
    });
  }
}

module.exports = new UserController();