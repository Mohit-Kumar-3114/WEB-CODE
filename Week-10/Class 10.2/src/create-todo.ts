import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId
    },
  });
  console.log(todo);

}

createTodo(1, "go to gym", "go to gym and do 10 pushups");
createTodo(2, "go to gym2", "go to gym and do 20 pushups");