import { User } from "@prisma/client";
import { ICreateBookDTO, IUpdateBookDTO } from "../dto/ICreateBook";

export interface IBookRepository {
  findAll(): Promise<User[] | null>;
  findOneByUserEmail(email: string): Promise<User | null>;
  create({ email, password }: ICreateBookDTO): Promise<User>;
  update({ email, password, role }: IUpdateBookDTO): Promise<User>;
  delete(id: number): Promise<User>;
}
