import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('book_loan', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
