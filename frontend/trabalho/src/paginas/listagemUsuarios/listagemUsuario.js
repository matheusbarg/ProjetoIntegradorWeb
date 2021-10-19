import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import menu from '../menu/index.js';
import { Typography } from '@material-ui/core';





const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ListaUsuarios() {
  const classes = useStyles();

  const [usuario, setUsuarios] = useState([]);

  async function handleDeleteUsuarios(id) {
    try {
      console.log(id);
        await api.delete(`usuario/${id}`, {});
        setUsuarios(usuario.filter(usuario => usuario.idusuario !== id));
    } catch (error) {
        alert('Erro ao deletar usuario');
    }
}

  useEffect(() => {
    api.get('usuarios',{}).then(response => {
        setUsuarios(response.data);
    });
}, []);  



  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
       
          <TableRow>
            <StyledTableCell  align="right">Nome</StyledTableCell >
            <StyledTableCell  align="right">Email</StyledTableCell >
            <StyledTableCell  align="right">Telefone</StyledTableCell >
       
          </TableRow>
        </TableHead>
        <TableBody>
          {usuario.map(usuario => (
            <StyledTableRow  key={usuario.id}>
          
              <StyledTableCell  align="right">{usuario.nome}</StyledTableCell >
              <StyledTableCell  align="right">{usuario.email}</StyledTableCell >
              <StyledTableCell  align="right">{usuario.telefone}</StyledTableCell >
             
            </StyledTableRow >
          ))};
        </TableBody>
      </Table>
    </TableContainer>
          
    )
                          
}

