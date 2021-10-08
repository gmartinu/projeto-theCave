-- DropForeignKey
ALTER TABLE `agendamento` DROP FOREIGN KEY `Agendamento_clienteId_fkey`;

-- DropForeignKey
ALTER TABLE `agendamento` DROP FOREIGN KEY `Agendamento_funcionarioId_fkey`;

-- DropForeignKey
ALTER TABLE `agendamento` DROP FOREIGN KEY `Agendamento_pagamentosId_fkey`;

-- DropForeignKey
ALTER TABLE `agendamento` DROP FOREIGN KEY `Agendamento_servicosId_fkey`;

-- AlterTable
ALTER TABLE `agendamento` MODIFY `clienteId` INTEGER,
    MODIFY `funcionarioId` INTEGER,
    MODIFY `pagamentosId` INTEGER,
    MODIFY `servicosId` INTEGER;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Pessoa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Pessoa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_servicosId_fkey` FOREIGN KEY (`servicosId`) REFERENCES `Servicos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_pagamentosId_fkey` FOREIGN KEY (`pagamentosId`) REFERENCES `Pagamentos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
