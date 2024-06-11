
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: "feed", userName: "feed134", email: 'feeding@gmail.com' },
    { name: "tony", userName: "RDJ", email: 'Ironman@gmail.com' },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
