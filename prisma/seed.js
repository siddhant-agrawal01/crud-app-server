
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: "feed", userName: "feed134", email: 'feeding@gmail.com' },
    { name: "tony", userName: "RDJ", email: 'Ironman@gmail.com' },
    { name: "sony", userName: "sony37", email: 'sony@gmail.com' },
    { name: "mike", userName: "mike23", email: 'mike@gmail.com'},
    { name: "jane", userName: "jane34", email: 'jane@gmail.com'},
    { name: "james", userName: "james45", email: 'james@gmail.com'},



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
