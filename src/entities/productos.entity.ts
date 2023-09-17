import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Ingredientes } from './ingredientes.entity';
import { Alergenos } from './alergenos.entity';
import { Comandas } from './comanda.entity';

@Entity()
export class Productos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tipo: string;

  @Column()
  Nombre: string;

  @Column({ default: false })
  isActive: boolean;

  @Column()
  Descripcion: string;

  @OneToMany(() => Alergenos, (alergeno) => alergeno.producto)
  alergenos: Alergenos[];

  @Column()
  cantidad: number;

  @Column()
  precio: number;

  @OneToMany(() => Ingredientes, (ingrediente) => ingrediente.producto)
  ingredientes: Ingredientes[];

  @ManyToOne(() => Comandas, (comanda) => comanda.producto)
  comanda: Comandas[];
  
  
}
