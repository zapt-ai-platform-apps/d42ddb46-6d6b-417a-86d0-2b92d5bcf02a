CREATE TABLE IF NOT EXISTS "products" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "vendor_id" UUID NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "price" DECIMAL(12, 2) NOT NULL,
  "stock" INTEGER NOT NULL DEFAULT 0,
  "category" TEXT,
  "images" TEXT[],
  "ar_model_url" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS "products_vendor_id_idx" ON "products" ("vendor_id");
CREATE INDEX IF NOT EXISTS "products_category_idx" ON "products" ("category");