import { PrimaryGeneratedColumn, Entity, OneToMany, Column } from "typeorm";
import { Comandas } from "./comanda.entity";

@Entity()
export class RecuentoCaja {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column()
  cantidadTarjeta: number;

  @Column()
  cantidadEfectivo: number;

  @Column()
  cantidadReparto: number;

  @Column()
  cantidadTerceros: number;

  @OneToMany(() => Comandas, (comanda) => comanda.recuentoComandas)
  comanda: Comandas[];
}