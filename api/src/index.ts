import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

prisma.user.create({
    data :{
        usuario: "asd",
        senha: "123"
    }
})