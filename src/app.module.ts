import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Hosteleria } from './module/hosteleria.module';

@Module({
  imports: [
    Hosteleria,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-wild-leaf-67658727.eu-central-1.aws.neon.tech',
      port: 5432,
      password: 'TzrLW8UyOmf0',
      username: 'fl0user',
      entities: [User],
      autoLoadEntities: true,
      database: 'hosteleria',
      synchronize: true,
      logging: true,
      ssl: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
