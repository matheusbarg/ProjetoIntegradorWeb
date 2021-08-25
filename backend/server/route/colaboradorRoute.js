const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const colaboradoresService = require('../service/colaboradorService');


router.get('/colaboradores',async function(req,res){
    const colaboradores = await colaboradoresService.getColaboradores();
    res.json(colaboradores);
});

router.get("/colaborador/:id",async function(req,res){
    const colaborador = await colaboradoresService.getColaborador(req.params.id);
    res.json(colaborador);
 
});

router.delete('/colaborador/:id',async function(req,res){
    const deleteColaborador = await colaboradoresService.deleteColaborador(req.params.id);
    return res.json([{message:'registro excluido com sucesso'}]); 
   
});

router.put('/colaborador',async function(req,res) {
    const colaborador = req.body;
    const newColaborador = await colaboradoresService.saveColaborador(colaborador);
    res.json(newColaborador);
});

module.exports =router;