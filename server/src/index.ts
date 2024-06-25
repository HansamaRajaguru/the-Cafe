import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import reservationRoutes from './routes/reservationRoutes';
import mongooseSetup from "./configs/mongoose";
const app = express();

app.set("view engine", "jade");
app.disable("etag");

require('dotenv').config();

mongooseSetup();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', reservationRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
