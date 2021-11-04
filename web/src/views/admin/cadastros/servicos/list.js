import { MainList } from "components";
import { C_Servicos } from "data/cadastros";
import React from "react";

function ListAgendamentos() {

  return (
    <MainList columns={[
      { 
        Header: "Descrição",
        acessor: "descricao"
      },
      {
        Header: "Valor",
        acessor: (row) => row.valor?.toBRL()
      },
    ]} model={C_Servicos} />
  );
}

export default ListAgendamentos;
