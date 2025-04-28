/*import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Configuración de Sequelize para conectar a MySQL
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,         // El host de la base de datos (puede ser localhost o un contenedor)
  username: process.env.DB_USER,     // El usuario de la base de datos
  password: process.env.DB_PASSWORD, // La contraseña del usuario
  database: process.env.DB_NAME,     // El nombre de la base de datos
  logging: false,                    // Hacer que no se impriman las consultas SQL en la consola
});

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

// Exportar la instancia de Sequelize para que se pueda usar en los modelos
export { sequelize, connectDB };*/
