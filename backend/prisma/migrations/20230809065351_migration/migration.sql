-- CreateTable
CREATE TABLE "clinics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "doctorName" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "timeZone" TEXT NOT NULL,
    "expireDate" TEXT NOT NULL,
    "usersId" INTEGER,
    CONSTRAINT "clinics_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
