/*
  Warnings:

  - You are about to drop the column `city` on the `ProfessionalProfile` table. All the data in the column will be lost.
  - Added the required column `location` to the `ProfessionalProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ProfessionalProfile" DROP COLUMN "city",
ADD COLUMN     "location" TEXT NOT NULL;
