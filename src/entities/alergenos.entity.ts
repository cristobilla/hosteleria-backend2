import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Productos } from './productos.entity';
@Entity()
export class Alergenos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  logo: string;

  @ManyToOne(() => Productos, (producto) => producto.alergenos)
  producto: Productos;
}
