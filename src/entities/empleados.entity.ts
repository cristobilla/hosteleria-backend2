import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Productos } from './productos.entity';
import { Comandas } from './comanda.entity';
@Entity()
export class Empleados {
  @PrimaryColumn()
  username: string;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @ManyToOne(() => Comandas, (comanda) => comanda.camarero)
  comanda: Comandas[];
}
