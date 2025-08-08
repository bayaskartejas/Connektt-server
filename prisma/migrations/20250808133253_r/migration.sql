-- AlterTable
ALTER TABLE "public"."ProfessionalProfile" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "business" DROP NOT NULL,
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "experience" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL;
