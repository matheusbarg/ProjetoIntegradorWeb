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
import logo from './logo.jpg';





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


export default function ListaProdutos() {
  const classes = useStyles();

  const [produto, setProdutos] = useState([]);

  async function handleDeleteProdutos(id) {
    try {
      console.log(id);
        await api.delete(`produto/${id}`, {});
        setProdutos(produto.filter(produto => produto.codigo !== id));
    } catch (error) {
        alert('Erro ao deletar produto');
    }
}

  useEffect(() => {
    api.get('produtos',{}).then(response => {
        setProdutos(response.data);
    });
}, []);  



  return (
    
    <TableContainer component={Paper}>
      
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
       
          <TableRow>
          <StyledTableCell  align="left">Foto</StyledTableCell >
            <StyledTableCell  align="right">Codigo</StyledTableCell >
            <StyledTableCell  align="right">Nome</StyledTableCell >
            <StyledTableCell  align="right">Descrição</StyledTableCell >
            <StyledTableCell  align="right">Tamanho</StyledTableCell >
            <StyledTableCell  align="right">Preco</StyledTableCell >
            <StyledTableCell  align="center">Excluir</StyledTableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          {produto.map(produto => (
            <StyledTableRow  key={produto.id}>
              <StyledTableCell>  <img src={produto.foto}  width="200" height="200" margin-left="10px" /> </StyledTableCell >
              <StyledTableCell  align="right">{produto.codigo}</StyledTableCell >
              <StyledTableCell  align="right">{produto.nome}</StyledTableCell >
              <StyledTableCell  align="right">{produto.descricao}</StyledTableCell >
              <StyledTableCell  align="right">{produto.tamanho}</StyledTableCell >
              <StyledTableCell  align="right">{"R$"+ produto.preco}</StyledTableCell >
              <StyledTableCell  align="center">
              <Button variant="contained" color="primary" type="button" onClick={() => handleDeleteProdutos(produto.codigo)}>Excluir</Button></StyledTableCell >
            </StyledTableRow >
          ))};
        </TableBody>
      </Table>
    </TableContainer>
          
    )
                          
}

