import express from 'express';
import peopleRoutes from './routes/people.routes.js';

const app = express();

app.use(express.json());

app.use(peopleRoutes);
app.listen("9000", () => {
    console.log("Server running on port: ", 9000);
});
