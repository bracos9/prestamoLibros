import express from 'express';
import { connectDB } from './database'; // Asegúrate de importar la conexión a la base de datos
import loanRoutes from './routes/loanRoutes';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de préstamos
app.use('/loans', loanRoutes);

// Conectar con la base de datos y luego iniciar el servidor
connectDB().then(() => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
