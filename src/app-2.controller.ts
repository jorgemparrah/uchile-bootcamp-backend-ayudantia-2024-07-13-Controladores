import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("usuario-2")
export class App2Controller {

  constructor() {}

  @Get("id")
  consultarUsuario(): string {
    return "Adios Jorge 1";
  }

  @Post("registrar")
  registraUsuario(): string {
    return "Adios Jorge 2";
  }

  @Patch("actualizar")
  actualizarUsuario(): string {
    return "Adios Jorge 3";
  }
}
