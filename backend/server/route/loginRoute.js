const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const loginService = require('../service/loginService');
const sha256 = require ('crypto-js/sha256');
const hmacSHA512 = require ('crypto-js/hmac-sha512');
const Base64 = require ('crypto-js/enc-base64');
var  SHA256 = require("crypto-js/sha256");
const jwt = require("jsonwebtoken");
const SECRET = 'matheusbarg';

router.put('/login', async function(req, res) {
   const senha =  req.body.senha;
   const novaSenha = (SHA256(senha));
   req.body.senha = novaSenha;
    const user = req.body;
    const userConnect = await loginService.auten(user);

    if (userConnect!= "") {
      // res.json(userConnect)
       const token =jwt.sign({userId:req.body.codigo},SECRET,{expiresIn:100});
       return res.json({auth:true,token});
      
    } else {
       console.log("Não conecta")
       res.status(401).send("Usuario não encontrado");
       
    }
    
   router.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})
 });

module.exports = router;