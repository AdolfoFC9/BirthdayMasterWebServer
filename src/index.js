import express from 'express';
import peopleRoutes from './routes/people.routes.js';

const app = express();

app.use(express.json());

app.use(peopleRoutes);
app.listen(process.env.WS_PORT, () => {
    console.log("Server running on port: ", process.env.WS_PORT);
});
