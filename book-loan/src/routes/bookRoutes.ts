import express from 'express';
import { createBook, updateBook, deleteBook } from '../controllers/BookController';

const router = express.Router();

router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
