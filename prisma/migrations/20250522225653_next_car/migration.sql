/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Veicles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "Veicles";

-- CreateTable
CREATE TABLE "veicles" (
    "id" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "q_port" INTEGER NOT NULL,

    CONSTRAINT "veicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mark" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
