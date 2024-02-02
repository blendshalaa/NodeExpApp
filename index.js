// index.js

import express from 'express';
import routes from './routes/routes.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

// Use the CRUD routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
