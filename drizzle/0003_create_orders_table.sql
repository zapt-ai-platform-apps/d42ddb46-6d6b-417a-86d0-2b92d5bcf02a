CREATE TABLE IF NOT EXISTS "orders" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "buyer_id" UUID NOT NULL,
  "total_amount" DECIMAL(12, 2) NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'pending',
  "payment_method" TEXT,
  "shipping_address" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "order_items" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "order_id" UUID NOT NULL,
  "product_id" UUID NOT NULL,
  "vendor_id" UUID NOT NULL,
  "quantity" INTEGER NOT NULL,
  "price" DECIMAL(12, 2) NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'pending'
);

CREATE INDEX IF NOT EXISTS "orders_buyer_id_idx" ON "orders" ("buyer_id");
CREATE INDEX IF NOT EXISTS "orders_status_idx" ON "orders" ("status");
CREATE INDEX IF NOT EXISTS "order_items_order_id_idx" ON "order_items" ("order_id");
CREATE INDEX IF NOT EXISTS "order_items_vendor_id_idx" ON "order_items" ("vendor_id");