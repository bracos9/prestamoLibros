import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class BookAuthor extends Model {}

BookAuthor.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  bookId: { type: DataTypes.INTEGER, allowNull: false },
  authorId: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, modelName: 'BookAuthor' });

export default BookAuthor;
