import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppControllers from './controllers';
import AppServices from './services';
import AppEntities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(AppEntities)],
  controllers: [...AppControllers],
  providers: [...AppServices],
  exports: [TypeOrmModule],
})
export class Hosteleria {}
