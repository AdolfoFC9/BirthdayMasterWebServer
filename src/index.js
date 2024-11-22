import express from 'express';
import testRoutes from './routes/test.routes.js';
import e from 'express';

const app = express();

app.use(testRoutes);
app.use(express.json());
app.listen(9000);

console.log("Server running on port: ", 9000);
