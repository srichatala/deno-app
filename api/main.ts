import { Application, Router } from "https://deno.land/x/oak@v17.1.3/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { findActorById, getActors, getAllPayments } from "./db.ts";

const router = new Router();
router
.get("/api/v1", (context) => {
  const text = `{
    "data": "welcome to Deno App"
  }`;
  context.response.body = text;
})
  .get("/api/v1/actors", async (context) => {
      const result = await getActors();
      context.response.body = result;
  })
  .get("/api/v1/actors/:id", async (context) => {
    context.response.body = await findActorById(Number(context?.params?.id));
  })
  .get("/api/v1/payments", async (context) => {
    const result = await getAllPayments();
    context.response.body = result;
  });

const app = new Application();
app.use(oakCors({ origin: "*" }));
app.use(router.routes());
app.use(router.allowedMethods());


await app.listen({ port: 8002 });