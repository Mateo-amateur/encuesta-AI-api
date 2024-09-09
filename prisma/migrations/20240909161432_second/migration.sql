/*
  Warnings:

  - You are about to drop the column `userDNI` on the `register` table. All the data in the column will be lost.
  - Added the required column `userEdge` to the `register` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_register" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "userEdge" INTEGER NOT NULL,
    "response1" INTEGER NOT NULL,
    "response2" INTEGER NOT NULL,
    "response3" INTEGER NOT NULL,
    "response4" INTEGER NOT NULL
);
INSERT INTO "new_register" ("id", "response1", "response2", "response3", "response4", "username") SELECT "id", "response1", "response2", "response3", "response4", "username" FROM "register";
DROP TABLE "register";
ALTER TABLE "new_register" RENAME TO "register";
CREATE UNIQUE INDEX "register_username_key" ON "register"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
