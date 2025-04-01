CREATE TABLE IF NOT EXISTS "crypto_wallets" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL UNIQUE,
  "btc_balance" DECIMAL(20, 8) DEFAULT 0,
  "eth_balance" DECIMAL(20, 8) DEFAULT 0,
  "usdt_balance" DECIMAL(20, 8) DEFAULT 0,
  "last_updated" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "crypto_transactions" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "wallet_id" UUID NOT NULL,
  "transaction_type" TEXT NOT NULL,
  "amount" DECIMAL(20, 8) NOT NULL,
  "currency" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "escrow_transactions" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "order_id" UUID,
  "buyer_id" UUID NOT NULL,
  "seller_id" UUID NOT NULL,
  "amount" DECIMAL(12, 2) NOT NULL,
  "currency" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'pending',
  "created_at" TIMESTAMP DEFAULT NOW(),
  "released_at" TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "crypto_wallets_user_id_idx" ON "crypto_wallets" ("user_id");
CREATE INDEX IF NOT EXISTS "crypto_transactions_wallet_id_idx" ON "crypto_transactions" ("wallet_id");
CREATE INDEX IF NOT EXISTS "escrow_transactions_buyer_id_idx" ON "escrow_transactions" ("buyer_id");
CREATE INDEX IF NOT EXISTS "escrow_transactions_seller_id_idx" ON "escrow_transactions" ("seller_id");