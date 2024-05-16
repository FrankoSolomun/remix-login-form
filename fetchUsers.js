/* global process */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listUsers() {
  const users = await prisma.user.findMany();
  console.log(users);

  // Check for duplicate emails
  const emailCount = new Map();
  users.forEach(user => {
    if (emailCount.has(user.email)) {
      emailCount.set(user.email, emailCount.get(user.email) + 1);
    } else {
      emailCount.set(user.email, 1);
    }
  });

  console.log("Duplicate Emails:");
  for (const [email, count] of emailCount.entries()) {
    if (count > 1) {
      console.log(`Email: ${email}, Count: ${count}`);
    }
  }
}

listUsers()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
