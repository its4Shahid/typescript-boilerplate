import express, { NextFunction } from 'express';
import 'reflect-metadata';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3005, () => {
  console.log(`Server started at port 3005`);
});
