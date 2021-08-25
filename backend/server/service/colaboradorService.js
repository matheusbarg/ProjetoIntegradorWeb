const colaboradorData = require('../data/colaboradorData');


exports.getColaboradores = function(){
    return colaboradorData.getColaboradores();
}
exports.getColaborador = function(colaboradorID){
    return colaboradorData.getColaborador(colaboradorID);
}
exports.deleteColaborador = function(colaboradorID){
    return colaboradorData.deleteColaborador(colaboradorID);
}
exports.saveColaborador = function(colaborador){
    return colaboradorData.saveColaborador(colaborador);
}