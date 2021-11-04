import { MainList } from "components";
import { C_Agendamentos, C_Clientes } from "data/cadastros";
import React from "react";

function ListAgendamentos() {
  const getStatus = (id) => {
    // eslint-disable-next-line default-case
    switch (id) {
      case 1:
        return "Pendente"
      case 2: 
        return "Em Andamento"
      case 3: 
        return "Aguardando Pagamento"
      case 4: 
        return "Concluído"
      case 5: 
        return "Cancelado"
    }
  }

  const {data: clientes } = C_Clientes.useModel({
    pageSize: 9999,
  });

  return (
    <MainList columns={[
      { 
        Header: "Cliente",
        acessor: (row) => clientes?.rows.find(x => x.id === row.cliente)?.nome || "Sem cliente"
      },
      {
        Header: "Data",
        acessor: (row) => new Date(row.data).format('DD/MM/YYYY')
      },
      {
        Header: "Status",
        acessor: (row) => getStatus(row.status)
      },
    ]} model={C_Agendamentos} />
  );
}

export default ListAgendamentos;
