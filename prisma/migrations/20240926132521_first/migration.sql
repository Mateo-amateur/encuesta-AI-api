-- CreateTable
CREATE TABLE "register" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "userlastname" TEXT NOT NULL,
    "userEdge" INTEGER NOT NULL,
    "response1" INTEGER NOT NULL,
    "response2" INTEGER NOT NULL,
    "response3" INTEGER NOT NULL,
    "response4" INTEGER NOT NULL,

    CONSTRAINT "register_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "register_username_userlastname_key" ON "register"("username", "userlastname");
