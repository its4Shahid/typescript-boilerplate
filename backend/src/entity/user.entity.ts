import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  @Entity('users')
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
  
    @Column({ nullable: false })
    firstname: string;
  
    @Column({ nullable: true })
    lastname: string;
  
    @Column({ unique: true, nullable: false })
    email: string;
  
    @Column({ unique: true, nullable: false })
    username: string;
  
    @Column({ nullable: true })
    address: string;
  
    @Column({ nullable: false })
    password: string;
  
    @Column({ nullable: true })
    contact: string;
  }
  
