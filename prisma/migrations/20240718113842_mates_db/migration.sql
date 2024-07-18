/*
  Warnings:

  - You are about to drop the `plateform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_plateform` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user_plateform` DROP FOREIGN KEY `User_Plateform_plateformId_fkey`;

-- DropForeignKey
ALTER TABLE `user_plateform` DROP FOREIGN KEY `User_Plateform_userId_fkey`;

-- DropTable
DROP TABLE `plateform`;

-- DropTable
DROP TABLE `user_plateform`;

-- CreateTable
CREATE TABLE `Platform` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Platform` (
    `userId` INTEGER NOT NULL,
    `platformId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `platformId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Platform` ADD CONSTRAINT `User_Platform_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Platform` ADD CONSTRAINT `User_Platform_platformId_fkey` FOREIGN KEY (`platformId`) REFERENCES `Platform`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
