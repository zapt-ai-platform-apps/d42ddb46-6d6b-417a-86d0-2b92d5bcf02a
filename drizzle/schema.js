import { pgTable, uuid, text, timestamp, integer, decimal, boolean, foreignKey } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name'),
  role: text('role').notNull().default('buyer'),
  profileImage: text('profile_image'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  vendorId: uuid('vendor_id').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  price: decimal('price', { precision: 12, scale: 2 }).notNull(),
  stock: integer('stock').notNull().default(0),
  category: text('category'),
  images: text('images').array(),
  arModelUrl: text('ar_model_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  buyerId: uuid('buyer_id').notNull(),
  totalAmount: decimal('total_amount', { precision: 12, scale: 2 }).notNull(),
  status: text('status').notNull().default('pending'),
  paymentMethod: text('payment_method'),
  shippingAddress: text('shipping_address'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const orderItems = pgTable('order_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id').notNull(),
  productId: uuid('product_id').notNull(),
  vendorId: uuid('vendor_id').notNull(),
  quantity: integer('quantity').notNull(),
  price: decimal('price', { precision: 12, scale: 2 }).notNull(),
  status: text('status').notNull().default('pending')
});

export const badges = pgTable('badges', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  criteria: text('criteria'),
  role: text('role').notNull()
});

export const userBadges = pgTable('user_badges', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  badgeId: uuid('badge_id').notNull(),
  earnedAt: timestamp('earned_at').defaultNow()
});

export const challenges = pgTable('challenges', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description'),
  rewardType: text('reward_type'),
  rewardValue: text('reward_value'),
  startDate: timestamp('start_date'),
  endDate: timestamp('end_date'),
  role: text('role').notNull()
});

export const userChallenges = pgTable('user_challenges', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  challengeId: uuid('challenge_id').notNull(),
  progress: integer('progress').default(0),
  completed: boolean('completed').default(false),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow()
});

export const cryptoWallets = pgTable('crypto_wallets', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().unique(),
  btcBalance: decimal('btc_balance', { precision: 20, scale: 8 }).default('0'),
  ethBalance: decimal('eth_balance', { precision: 20, scale: 8 }).default('0'),
  usdtBalance: decimal('usdt_balance', { precision: 20, scale: 8 }).default('0'),
  lastUpdated: timestamp('last_updated').defaultNow()
});

export const cryptoTransactions = pgTable('crypto_transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  walletId: uuid('wallet_id').notNull(),
  transactionType: text('transaction_type').notNull(),
  amount: decimal('amount', { precision: 20, scale: 8 }).notNull(),
  currency: text('currency').notNull(),
  status: text('status').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

export const escrowTransactions = pgTable('escrow_transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id'),
  buyerId: uuid('buyer_id').notNull(),
  sellerId: uuid('seller_id').notNull(),
  amount: decimal('amount', { precision: 12, scale: 2 }).notNull(),
  currency: text('currency').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
  releasedAt: timestamp('released_at')
});