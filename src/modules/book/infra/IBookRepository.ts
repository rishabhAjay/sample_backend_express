import { book } from "@prisma/client";
import { ICreateBookDTO, IUpdateBookDTO } from "../dto/ICreateBook";

export interface IBookRepository {
  findAll(): Promise<book[] | null>
  findOneByBookTitle(title: string): Promise<book | null>
  create({ title, description }: ICreateBookDTO): Promise<book>
  update({id, title, description }: IUpdateBookDTO): Promise<book>
  delete(id: number): Promise<book>
}