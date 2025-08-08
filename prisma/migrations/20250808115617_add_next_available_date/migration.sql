/*
  Warnings:

  - You are about to drop the column `availableDates` on the `ProfessionalProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."ProfessionalProfile" DROP COLUMN "availableDates",
ADD COLUMN     "nextAvailableDate" TIMESTAMP(3);
