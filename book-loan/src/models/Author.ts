import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Author extends Model {}

Author.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, modelName: 'Author' });

export default Author;
