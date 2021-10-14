import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const models = [
    {
        url: "/agendamento",
        model: prisma.agendamento,
        includes: {
            cliente: true,
            funcionario: true,
            servico: true,
            pagamento: true
        }
    },
    {
        url: "/pagamentos",
        model: prisma.pagamentos
    },
    {
        url: "/pessoa",
        model: prisma.pessoa,
        includes: {
            usuario: true,
            endereco: true,
        }
    },
    {
        url: "/servicos",
        model: prisma.servicos
    },
]