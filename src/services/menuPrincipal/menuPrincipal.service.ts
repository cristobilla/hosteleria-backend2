import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'src/entities/roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuPrincipalServices {
  constructor(
    @InjectRepository(Roles)
    private userRoles: Repository<Roles>,
  ) {}
  async findById(rol: string): Promise<Roles[]> {
    return this.userRoles
      .createQueryBuilder('roles')
      .where('roles.nivelRol = :rol', { rol: rol })
      .execute();
  }
}
