import Book from './Book';
import Author from './Author';
import BookAuthor from './bookAuthor';
import Loan from './Loan';
import User from './User';

Book.belongsToMany(Author, { through: BookAuthor });
Author.belongsToMany(Book, { through: BookAuthor });

User.hasMany(Loan);
Loan.belongsTo(User);

Book.hasMany(Loan);
Loan.belongsTo(Book);

export { Book, Author, BookAuthor, Loan, User };
