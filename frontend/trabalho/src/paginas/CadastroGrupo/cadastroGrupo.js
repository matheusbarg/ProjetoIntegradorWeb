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

export default function CadastroGrupo() {
  const classes = useStyles();
  const [codigo, setID] = useState('');
    const [nome, setNome] = useState('');
    const [tempoOcioso, setTempoOcioso] = useState('');
    
    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            codigo,
            nome,
            tempoOcioso
            
        };

        try {
            console.log(dados);
            const response = await api.put('colaboradores', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("Grupo cadastrado com sucesso");
          window.open("http://localhost:3000/","_self");
           
           
        } catch (error) {
            alert("Erro ao cadastro grupo " + error.message);            
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
          Cadastrar Grupo
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
            <Grid item xs={12} > 
              <TextField
                autoComplete="fname"
                name="tempoOcioso"
                variant="outlined"
                required
                fullWidth
                id="tempoOcioso"
                value={tempoOcioso}
                label="Tempo Ocioso"
                autoFocus
                onChange={e => setTempoOcioso(e.target.value)}
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