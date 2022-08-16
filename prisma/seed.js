const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, CPH!",
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, Meetup!",
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
