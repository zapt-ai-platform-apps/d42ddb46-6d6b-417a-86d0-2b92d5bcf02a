CREATE TABLE IF NOT EXISTS "badges" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "description" TEXT,
  "image_url" TEXT,
  "criteria" TEXT,
  "role" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "user_badges" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "badge_id" UUID NOT NULL,
  "earned_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "challenges" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "description" TEXT,
  "reward_type" TEXT,
  "reward_value" TEXT,
  "start_date" TIMESTAMP,
  "end_date" TIMESTAMP,
  "role" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "user_challenges" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "challenge_id" UUID NOT NULL,
  "progress" INTEGER DEFAULT 0,
  "completed" BOOLEAN DEFAULT FALSE,
  "completed_at" TIMESTAMP,
  "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS "user_badges_user_id_idx" ON "user_badges" ("user_id");
CREATE INDEX IF NOT EXISTS "user_challenges_user_id_idx" ON "user_challenges" ("user_id");
CREATE INDEX IF NOT EXISTS "badges_role_idx" ON "badges" ("role");
CREATE INDEX IF NOT EXISTS "challenges_role_idx" ON "challenges" ("role");