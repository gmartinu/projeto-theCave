import { MainList } from "components";
import { C_Gerentes } from "data/cadastros";
import React from "react";
import { normalize_cpf_cnpj } from "utils";

// import { Container } from './styles';

function ListGerentes() {
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
    ]} model={C_Gerentes} />
  );
}

export default ListGerentes;
