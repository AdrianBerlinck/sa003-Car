-- CreateTable
CREATE TABLE "Veicles" (
    "id" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "q_port" INTEGER NOT NULL,

    CONSTRAINT "Veicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mark" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
