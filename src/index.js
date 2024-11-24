import express from 'express';
import peopleRoutes from './routes/people.routes.js';
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(peopleRoutes);
app.listen(process.env.WS_PORT, () => {
    console.log("Server running on port: ", process.env.WS_PORT);
});
