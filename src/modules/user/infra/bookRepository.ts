import { user, PrismaClient } from "@prisma/client";
import { prisma } from "../../../config/dbClient";
import { ICreateBookDTO, IUpdateBookDTO } from "../dto/ICreateBook";
import { IBookRepository } from "../infra/IBookRepository";

class UserRepository implements IBookRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  findOneByUserEmail(email: string): Promise<user | null> {
    return this.repository.user.findUnique({ where: { email } });
  }

  create({ email, password }: ICreateBookDTO): Promise<user> {
    return this.repository.user.create({
      data: {
        email,
        password,
        role: "user",
      },
    });
  }

  update({ email, password, role }: IUpdateBookDTO): Promise<user> {
    return this.repository.user.update({
      where: {
        id,
      },
      data: {
        email,
        password,
        role,
      },
    });
  }

  findAll(): Promise<user[] | null> {
    return this.repository.user.findMany();
  }

  delete(id: number): Promise<user> {
    return this.repository.user.delete({ where: { id } });
  }
}

export { UserRepository };
