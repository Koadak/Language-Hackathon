-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Decks" (
    "deck_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "deck_name" TEXT NOT NULL,
    "isManaged" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Decks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FlashCards" (
    "deck_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "fc_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fc_front" TEXT NOT NULL,
    "fc_back" TEXT NOT NULL,
    CONSTRAINT "FlashCards_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "Decks" ("deck_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FlashCards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
