import express from 'express';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { typeOrmConfig } from './ormconfig';

export const AppDataSource=new DataSource(typeOrmConfig);
AppDataSource.initialize().then(()=>{
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.listen(3005, () => {
    console.log(`Server started at port 3005`);
  });
}).catch(()=>console.error())

