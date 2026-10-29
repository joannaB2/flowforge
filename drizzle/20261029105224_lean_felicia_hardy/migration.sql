CREATE TABLE "forms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar(255) NOT NULL,
	"description" text,
	"slug" varchar(255) NOT NULL UNIQUE,
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"fields" jsonb DEFAULT '[]' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
