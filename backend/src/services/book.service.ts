import AppDataSource from "../config/database";
import { Book } from "../entities/Book";


class BookService{
    private bookRepository = AppDataSource.getRepository(Book);

    async createBook(bookData: Partial<Book>): Promise<Book> {
        const book = this.bookRepository.create(bookData);
        return await this.bookRepository.save(book);
    }

    async getBooks(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async getBookById(id: number): Promise<Book | null> {
        return await this.bookRepository.findOneBy({id});
    }

    async updateBook(id: number, bookData: Partial<Book>): Promise<Book | null> {
        const book = await this.getBookById(id)
        if(!book) return null
        
        Object.assign(book, bookData)
        return await this.bookRepository.save(book)
    }

    async deleteBook(id: number): Promise<void> {
        await this.bookRepository.delete(id);
    }
}

export default new BookService();

