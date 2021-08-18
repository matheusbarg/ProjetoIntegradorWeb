const express = require ('express');
const app = express();
const cors = require ('cors');
const usuarioRoute = require('./route/usuarioRoute');
const produtoRoute = require('./route/produtoRoute');
const loginRoute = require('./route/loginRoute');


app.use(express.json());
app.use(cors());
app.use(usuarioRoute);
app.use(produtoRoute);
app.use(loginRoute);
app.listen(3334);

