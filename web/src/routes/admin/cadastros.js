import {
  AssignmentInd,
  ManageAccounts,
  Person,
  Schedule,
} from "@mui/icons-material";
import {
  FormAgendamentos,
  FormClientes,
  FormFuncionarios,
  FormGerentes,
  ListAgendamentos,
  ListClientes,
  ListFuncionarios,
  ListGerentes,
} from "views/admin/cadastros";

const Cadastros_Admin = [
  {
    path: "/cadastros/clientes",
    name: "Clientes",
    component: ListClientes,
    form: FormClientes,
    Icon: Person,
    layout: "/admin",
  },
  {
    path: "/cadastros/funcionarios",
    name: "Funcionários",
    component: ListFuncionarios,
    Icon: AssignmentInd,
    form: FormFuncionarios,
    layout: "/admin",
  },
  {
    path: "/cadastros/gerentes",
    name: "Gerentes",
    component: ListGerentes,
    form: FormGerentes,
    Icon: ManageAccounts,
    layout: "/admin",
  },
  {
    path: "/cadastros/agendamentos",
    name: "Agendamentos",
    component: ListAgendamentos,
    form: FormAgendamentos,
    Icon: Schedule,
    layout: "/admin",
  },
];

export default Cadastros_Admin;
