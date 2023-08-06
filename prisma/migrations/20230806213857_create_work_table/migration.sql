-- CreateTable
CREATE TABLE `work` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_role` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `company` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NULL,
    `is_hidden` BOOLEAN NOT NULL DEFAULT false,
    `language` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
