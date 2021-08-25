const database = require('../database/database');

exports.getColaboradores = function(){
    return database.query('select * from colaboradores');
}

exports.getColaborador = function(colaboradorID){
    return database.query('select * from colaboradores where codigo = $1',[colaboradorID]);
}

exports.deleteColaborador = function(colaboradorID){
    return database.none('delete from colaboradores where codigo = $1',[colaboradorID]);
}

exports.saveColaborador = function(colaborador){
    return database.one('insert into colaboradores (nome,email,funcao,telefone,foto) values ($1,$2,$3,$4,$5) returning *',
    [colaborador.nome,colaborador.email,colaborador.telefone,colaborador.funcao,colaborador.foto])};
