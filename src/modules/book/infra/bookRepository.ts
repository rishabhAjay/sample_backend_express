import { book, PrismaClient } from "@prisma/client"
import { prisma } from "../../../config/dbClient"
import { ICreateBookDTO, IUpdateBookDTO } from "../dto/ICreateBook"
import { IBookRepository } from "../infra/IBookRepository"

class BookRepository implements IBookRepository {
  private repository: PrismaClient

  constructor() {
    this.repository = prisma
  }

   findOneByBookTitle(title: string): Promise<book | null>  {
    return this.repository.book.findUnique({where: {title}})
  }

   create({ title, description }: ICreateBookDTO): Promise<book> { 
   return this.repository.book.create({
      data: {
          title,description
      }
    });
  }

  update({ id, title, description }: IUpdateBookDTO): Promise<book> { 
    return this.repository.book.update({
      where: {
        id
      },
       data: {
           title,description
       }
     });
   }

   findAll(): Promise<book[] | null> {
    return this.repository.book.findMany()
  }

  delete(id: number): Promise<book> {
    return this.repository.book.delete({where: {id}})
  }
}

export { BookRepository }