import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nivelRol: string;

  @Column()
  Nombre: string;

  @Column({ default: false })
  isActive: boolean;
}
