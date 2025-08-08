-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('CUSTOMER', 'PROFESSIONAL');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'CUSTOMER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProfessionalProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "business" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "bio" TEXT,
    "experience" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviews" INTEGER NOT NULL DEFAULT 0,
    "specialties" TEXT[],
    "availableFor" TEXT[],
    "availableDates" TIMESTAMP(3)[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfessionalProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Service" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "professionalId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "public"."User"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalProfile_userId_key" ON "public"."ProfessionalProfile"("userId");

-- AddForeignKey
ALTER TABLE "public"."ProfessionalProfile" ADD CONSTRAINT "ProfessionalProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "public"."ProfessionalProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
