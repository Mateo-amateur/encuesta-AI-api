-- CreateTable
CREATE TABLE "register" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "userDNI" INTEGER NOT NULL,
    "response1" INTEGER NOT NULL,
    "response2" INTEGER NOT NULL,
    "response3" INTEGER NOT NULL,
    "response4" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "register_userDNI_key" ON "register"("userDNI");
