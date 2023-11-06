// import {hash} from "bcrypt"
// import { AppError } from "../../../../shared/errors/AppError";

import { IBookRepository } from "../infra/IBookRepository";
import { BookRepository } from "../infra/bookRepository";
import { ICreateBookDTO, IUpdateBookDTO } from "../dto/ICreateBook";
import { AppError } from "../../../utils/AppError";

class BookService {
  private clientRepository: IBookRepository;
  constructor() {
    this.clientRepository = new BookRepository();
  }

  async createBookService({ title, description }: ICreateBookDTO) {
    const bookAlreadyExists = await this.clientRepository.findOneByBookTitle(
      title
    );

    if (bookAlreadyExists) {
      throw new AppError("Book Already Exists");
    }

    await this.clientRepository.create({
      title,
      description,
    });
  }

  async fetchBookService() {
    const books = await this.clientRepository.findAll();

    return books;
  }

  async updateBookService({ id, title, description }: IUpdateBookDTO) {
    const updatedBook = await this.clientRepository.update({
      id,
      title,
      description,
    });
    return updatedBook;
  }

  async deleteBookService(id: number) {
    const updatedBook = await this.clientRepository.delete(id);
    return updatedBook;
  }
}
const bookService = new BookService();
export default bookService;
