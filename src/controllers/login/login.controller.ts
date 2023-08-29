import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { LoginInterface } from 'src/model/login.model';
import { LoginServices } from 'src/services/login/login.service';

@Controller('Login')
export class LoginController {
  constructor(private readonly getLoginService: LoginServices) {}
  @Post('acceso')
  async getAcceso(@Body() parametros): Promise<User> {
    const inputRequest: LoginInterface = parametros;
    const entrada = this.getLoginService.getLogin(
      inputRequest.username,
      inputRequest.password,
    );
    console.log(entrada);
    return entrada;
  }
}
