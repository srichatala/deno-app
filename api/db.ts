import { drizzle } from "drizzle-orm/node-postgres";
import { actor as actorSchema, payment as paymentSchema } from "./drizzle/schema.ts";
 import { actorRelations, paymentRelations } from "./drizzle/relations.ts";
import pg from "pg";
import { eq } from "drizzle-orm/expressions";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";


// Use pg driver.
const { Pool } = pg;

// Instantiate Drizzle client with pg driver and schema.
export const db = drizzle({
  client: new Pool({
    connectionString: config()["DATABASE_URL"]
  }),       
  schema: { actorSchema, paymentSchema, actorRelations, paymentRelations},
});

//Get Actors
export async function getActors() {
    return await db.select().from(actorSchema)
}

// Find actor by id.
export async function findActorById(actorId: number) {
  return await db.select().from(actorSchema).where(eq(actorSchema.actorId, actorId),
  );
}


// Get all payments
export async function getAllPayments() {
    return await db.select().from(paymentSchema)
}