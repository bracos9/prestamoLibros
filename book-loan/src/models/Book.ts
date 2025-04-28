import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Definir qué atributos tiene un Book
interface BookAttributes {
  id: number;
  title: string;
  stock: number;
}

// Para la creación, el id puede ser opcional
interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public stock!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Book.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
}, { 
  sequelize,
  modelName: 'Book',
  tableName: 'Books'
});

export default Book;
