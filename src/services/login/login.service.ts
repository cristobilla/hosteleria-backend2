import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/users.entity';

@Injectable()
export class LoginServices {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });
  }

  async findUserPassword(
    username: string,
    password: string,
  ): Promise<User | null> {
    const variable = this.usersRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .andWhere('user.password = :password', { password: password })
      .execute();
    return variable;
  }
  async getLogin(username: string, password: string): Promise<User> {
    const usuario = await this.findUserPassword(username, password);
    return usuario;
  }
}
