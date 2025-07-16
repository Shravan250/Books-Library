import { Router } from 'express';
import { Request, Response } from 'express';
import bookService from '../services/book.service';

const router = Router();

//Create a new book
router.post('/', async (req: Request, res: Response) => {
    try {
        const bookData = req.body;
        const book = await bookService.createBook(bookData);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
})

//Get all Books
router.get('/', async (req: Request, res: Response) => {
    try {
        const books = await bookService.getBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get books' });
    }
})

// Get a single book by ID
router.get("/:id", async (req: Request, res: Response) => {
    try{
        const book = await bookService.getBookById(Number(req.params.id));
        if(!book){
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    }catch(e){
        res.status(500).json({ error: 'Failed to get book' });
    }
})

//Update a book
router.put("/:id", async (req: Request, res: Response) => {
    try{
        const bookData = req.body
        const book = await bookService.updateBook(Number(req.params.id), bookData)
        if(!book){
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    }catch(e){
        res.status(500).json({ error: 'Failed to update book' });
    }
})

//Delete a book
router.delete("/:id", async (req: Request, res: Response) => {
    try{
        await bookService.deleteBook(Number(req.params.id))
        res.status(200).json({ message: 'Book deleted successfully' });
    }catch(e){
        res.status(500).json({ error: 'Failed to delete book' });
    }
})

export default router;