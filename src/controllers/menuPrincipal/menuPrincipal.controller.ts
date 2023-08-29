import { Body, Controller, Post } from '@nestjs/common';
import { Roles } from 'src/entities/roles.entity';
import { MenuPrincipalInterface } from 'src/model/menuPrincipal.model';
import { MenuPrincipalServices } from 'src/services/menuPrincipal/menuPrincipal.service';

@Controller('mainMenu')
export class MenuPrincipal {
  constructor(private readonly menuService: MenuPrincipalServices) {}
  @Post('menu')
  async getMainMenuOptions(@Body() body): Promise<Roles[]> {
    const inputRequest: MenuPrincipalInterface = body;
    return this.menuService.findById(inputRequest.rol);
  }
}
