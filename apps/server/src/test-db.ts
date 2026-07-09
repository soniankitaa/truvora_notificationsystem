import { prisma } from "./lib/prisma.js";

async function main() {
  await prisma.$connect();
  console.log("✅ Connected to PostgreSQL!");

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
});