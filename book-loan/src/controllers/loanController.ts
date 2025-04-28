import { Request, Response } from 'express';
import Loan from '../models/Loan';    
import Book from '../models/Book';    

// Función para pedir prestado un libro
export const borrowBook = async (req: Request, res: Response): Promise<Response> => {
  const { userId, bookId } = req.body;

  try {
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ error: 'El libro no existe.' });
    }

    if (book.stock <= 0) {
      return res.status(400).json({ error: 'No hay copias disponibles para prestar.' });
    }

    const loan = await Loan.create({
      userId,
      bookId,
      loanDate: new Date(),
    });

    await book.update({ stock: book.stock - 1 });

    return res.status(201).json({ message: 'Préstamo creado exitosamente.', loan });
  } catch (error) {
    console.error('Error al pedir prestado el libro:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

// Función para devolver un libro
export const returnBook = async (req: Request, res: Response): Promise<Response> => {
  const { loanId } = req.body;

  try {
    const loan = await Loan.findByPk(loanId);

    if (!loan) {
      return res.status(404).json({ error: 'Préstamo no encontrado.' });
    }

    const book = await Book.findByPk(loan.bookId);

    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado.' });
    }

    await book.update({ stock: book.stock + 1 });

    await loan.destroy();

    return res.status(200).json({ message: 'Libro devuelto correctamente.' });
  } catch (error) {
    console.error('Error al devolver el libro:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};
