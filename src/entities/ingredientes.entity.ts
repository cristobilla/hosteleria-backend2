import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Productos } from './productos.entity';

@Entity()
export class Ingredientes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  cantidad: number;

  @ManyToOne(() => Productos, (producto) => producto.ingredientes)
  producto: Productos;
}
