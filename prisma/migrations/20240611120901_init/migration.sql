-- CreateTable
CREATE TABLE "Cell" (
    "id" SERIAL NOT NULL,
    "row" INTEGER NOT NULL,
    "column" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Cell_pkey" PRIMARY KEY ("id")
);
