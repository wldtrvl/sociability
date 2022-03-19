import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  email: string;

  @Exclude()
  @Column('text')
  password: string;
}
