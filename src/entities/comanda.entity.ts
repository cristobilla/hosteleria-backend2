import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Productos } from './productos.entity';
import { Empleados } from './empleados.entity';
import { RecuentoCaja } from './caja.entity';
@Entity()
export class Comandas {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numeroMesa: string;

  @Column()
  total: number;

  @Column()
  pago: number;

  @Column()
  devuelta : number;

  @OneToOne(() => Empleados)
  @JoinColumn()
  camarero : Empleados;

  @ManyToOne(() => Productos, (producto) => producto.comanda)
  producto: Productos[];

  @ManyToOne(() => RecuentoCaja, (recuentoCaja) => recuentoCaja.comanda)
  recuentoComandas: RecuentoCaja[];
}
