const express = require ('express');
const app = express();
const cors = require ('cors');
const usuarioRoute = require('./route/usuarioRoute');
const loginRoute = require('./route/loginRoute');
const colaboradorRoute = require('./route/colaboradorRoute');

app.use(express.json());
app.use(cors());
app.use(usuarioRoute);
app.use(loginRoute);
app.use(colaboradorRoute);
app.listen(3334);

