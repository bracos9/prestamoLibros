import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Definir los atributos de un Loan
interface LoanAttributes {
  id: number;
  userId: number;
  bookId: number;
  loanDate: Date;
  returnDate: Date | null;
}

// Para creación
interface LoanCreationAttributes extends Optional<LoanAttributes, 'id' | 'loanDate' | 'returnDate'> {}


class Loan extends Model<LoanAttributes, LoanCreationAttributes> implements LoanAttributes {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public loanDate!: Date;
  public returnDate!: Date | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Loan.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  bookId: { type: DataTypes.INTEGER, allowNull: false },
  loanDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  returnDate: { type: DataTypes.DATE, allowNull: true },
}, {
  sequelize,
  modelName: 'Loan',
  tableName: 'Loans',
  timestamps: true,
});

export default Loan;
