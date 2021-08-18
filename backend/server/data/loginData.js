const database = require('../database/database');

exports.autenUser = function (user) {
    return database.query('select * from usuario where email = $1 AND senha = $2', [user.email, user.senha])
}