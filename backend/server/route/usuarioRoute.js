const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const usuarioService = require('../service/usuarioService');
const sha256 = require ('crypto-js/sha256');
const hmacSHA512 = require ('crypto-js/hmac-sha512');
const Base64 = require ('crypto-js/enc-base64');
var  SHA256 = require("crypto-js/sha256");

router.get('/usuarios',async function(req,res){
    const usuarios = await usuarioService.getUsuarios();
    res.json(usuarios);
});

router.get("/usuario/:id",async function(req,res){
    const usuario = await usuarioService.getUsuario(req.params.id);
    res.json(usuario);
 
});

router.delete('/usuario/:id',async function(req,res){
    const deleteUsuario = await usuarioService.deleteUsuario(req.params.id);
    return res.json([{message:'registro excluido com sucesso'}]); 
   
});

router.put('/usuario',async function(req,res) {
    const senha =  req.body.senha;
    const novaSenha = (SHA256(senha));
    req.body.senha = novaSenha;
    const usuario = req.body;
    const newUsuario = await usuarioService.saveUsuario(usuario);
    res.json(newUsuario);
});

module.exports =router;