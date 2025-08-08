/*
  Warnings:

  - Made the column `category` on table `ProfessionalProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `ProfessionalProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."ProfessionalProfile" ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL;
