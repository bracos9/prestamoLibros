Prestamo Libros

1. Clonar el repositorio
git clone https://github.com/bracos9/prestamoLibros/

cd book-loan

3. Intalas las dependencias
npm install

4. Compilar y correr el servidor
npm run dev

5. Probar API en Postman
POST /api/books

PUT /api/books/:id

DELETE /api/books/:id

POST /api/loans/borrow

POST /api/loans/return



--------------------------------------------------------------------------------------------------------------------------------
Decisiones tomadas

Separación clara de carpetas:
controllers/, services/, models/, routes/, database/, todo modularizado siguiendo buenas prácticas de Node.js con TypeScript.


Modelos:
Book, Author, User, Loan.

Stock control:
El modelo de Book tiene un campo stock que controla cuántas copias físicas hay disponibles.
Al hacer un préstamo (borrow), se reduce el stock. Al devolver (return), se incrementa.


Préstamos únicos:
Cada préstamo registra loanDate.
No se puede prestar un libro si no hay stock disponible.


ORM Sequelize:
Se usa Sequelize para facilitar las operaciones con la base de datos.


Manejo de errores:
Se agregaron respuestas HTTP adecuadas (400, 404, 500) para errores comunes.


Estilo de código limpio:
Tipado fuerte con TypeScript.
