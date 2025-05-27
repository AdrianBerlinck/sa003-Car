-- CreateTable
CREATE TABLE "Maintenance" (
    "id" TEXT NOT NULL,
    "veiculo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("id")
);
