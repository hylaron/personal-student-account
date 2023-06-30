const ApiError = require('../../error/ApiError');
const SSHConnection = require("../../DBmiubysite.js");

class GradeController {
  grNum(req, res, next) {
    console.log('---------------------------------');

    SSHConnection.then((conn) => {
      conn.query(`
        SELECT title, descr, txt FROM pages
        WHERE parent = 383 AND title LIKE 'Оплата за обучение%'
        ORDER BY id DESC LIMIT 1`,
        (err, result, fields) => {
          if (err || result.length === 0) {
            throw new ApiError("Запись не найдена");
          }

          console.log('SQL Query Result:', result);
          res.json(result);
        }
      );
    })
    .catch((err) => {
      // Обработка ошибок подключения к базе данных или других проблем
      console.error(err);
      next(err); // передача ошибки дальше для обработки в middleware
    });
  }
}

module.exports = new GradeController();