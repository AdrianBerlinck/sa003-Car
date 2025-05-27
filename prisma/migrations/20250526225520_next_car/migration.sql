/*
  Warnings:

  - You are about to drop the `Maintenance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Maintenance";

-- CreateTable
CREATE TABLE "maintenance" (
    "id" TEXT NOT NULL,
    "veiculo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "maintenance_pkey" PRIMARY KEY ("id")
);
