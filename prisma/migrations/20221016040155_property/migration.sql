-- CreateTable
CREATE TABLE "Property" (
    "PropertyId" INTEGER NOT NULL,
    "ApiUpdateAt" TEXT,
    "Tags" TEXT[],
    "PermLink" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "ListDate" TEXT NOT NULL,
    "Branding" TEXT NOT NULL,
    "Photos" TEXT[],
    "ListPrice" INTEGER NOT NULL,
    "YearBuilt" INTEGER NOT NULL,
    "BathsFull" INTEGER NOT NULL,
    "BathsHalf" INTEGER NOT NULL,
    "Baths" INTEGER NOT NULL,
    "LotSqft" INTEGER NOT NULL,
    "Sqft" INTEGER NOT NULL,
    "Garage" INTEGER NOT NULL,
    "Stories" INTEGER NOT NULL,
    "Beds" INTEGER NOT NULL,
    "PropertyType" TEXT NOT NULL,
    "ListingId" TEXT NOT NULL,
    "PostalCode" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "Longitude" INTEGER NOT NULL,
    "Latitude" INTEGER NOT NULL,
    "City" TEXT NOT NULL,
    "StateCode" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "County" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("PropertyId")
);