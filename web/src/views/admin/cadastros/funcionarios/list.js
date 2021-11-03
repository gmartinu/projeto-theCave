import { MainList } from "components";
import { C_Funcionarios } from "data/cadastros";
import React from "react";
import { normalize_cpf_cnpj } from "utils";

// import { Container } from './styles';

function ListFuncionarios() {
  return (
    <MainList columns={[
      {
        Header: "Nome",
        acessor: 'nome'
      },
      {
        Header: "CPF",
        acessor: (row) => normalize_cpf_cnpj(row.cpf)
      },
      {
        Header: "Data de Nascimento",
        acessor: (row) => new Date(row.data_nascimento).format('DD/MM/YYYY')
      },
    ]} model={C_Funcionarios} />
  );
}

export default ListFuncionarios;
