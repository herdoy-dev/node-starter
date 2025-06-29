import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT | 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
