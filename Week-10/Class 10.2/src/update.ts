import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function updateUser(username: string, firstName: string, lastName: string) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

updateUser("admin2", "harsh", "mishra")