/*
  Warnings:

  - You are about to drop the `licenca` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clienteId` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcionarioId` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagamentosId` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicosId` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agendamento` ADD COLUMN `clienteId` INTEGER NOT NULL,
    ADD COLUMN `concluido` BOOLEAN,
    ADD COLUMN `funcionarioId` INTEGER NOT NULL,
    ADD COLUMN `pagamentosId` INTEGER NOT NULL,
    ADD COLUMN `servicosId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `endereco` ADD COLUMN `pessoaId` INTEGER;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `pessoaId` INTEGER;

-- DropTable
DROP TABLE `licenca`;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_servicosId_fkey` FOREIGN KEY (`servicosId`) REFERENCES `Servicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_pagamentosId_fkey` FOREIGN KEY (`pagamentosId`) REFERENCES `Pagamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
