/* global process */
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createUser() {
  const passwordHash = await bcrypt.hash('yourpassword', 10);
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: passwordHash,
      name: 'Test User'
    },
  });
  console.log(user);
}

createUser()
  .catch(e => {
    console.error(e);
    process.exit(1); // ESLint should no longer warn about `process` being undefined
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
