import React, {useState} from 'react';
import api from '../services/api';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const handleBlur = "";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(-5)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(-5)

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
   
  },
}));

export default function CadastroUsuario() {
  const classes = useStyles();
  const [idusuario, setID] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [foto, setFoto] = useState('');
    
    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            idusuario,
            nome,
            email,
            senha,
            telefone,
            foto
            
        };

        try {
            console.log(dados);
            const response = await api.put('usuario', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("Usuário cadastrado com sucesso");
          window.open("http://localhost:3000/","_self");
           
           
        } catch (error) {
            alert("Erro ao cadastrar usuario " + error.message);            
        }
    }
  
  
  return (
   
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <PersonAddIcon/>
          
        </Avatar>
        
        <form  method ="post "name ="form" className={classes.form} noValidate onSubmit={handleCadastro}>
        <Typography component="h1" variant="h5" >
          Cadastrar Usuario
        </Typography>
          <Grid container spacing={3}>
        
            <Grid item xs={12} > 
              <TextField
                autoComplete="fname"
                name="Nome"
                variant="outlined"
                required
                fullWidth
                id="nome"
                value={nome}
                label="Nome"
                autoFocus
                onChange={e => setNome(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={email}
                label="Email"
                name="email"
                placeholder="email@seudominio.com"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
                
            
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="senha"
                label="Senha"
                value={senha}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setSenha(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="telefone"
                type="phone"
                label="telefone"
                value={telefone}
                name="telefone"
                placeholder="999-99999"
                autoComplete="senha"
                onChange={e => setTelefone(e.target.value)}
                        
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="foto"
                type="text"
                label="Link Foto"
                value={foto}
                name="foto"
                onChange={e => setFoto(e.target.value)}
                        
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
             
            </Grid>
          </Grid>
         
        </form>
      </div>
      <Box mt={5}>
     
      </Box>
     
    </Container>
 

  );

 
}