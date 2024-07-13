import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("usuario")
export class AppController {

  constructor() {}

  @Get("id")
  consultarUsuario(): string {
    return "Hola Jorge 1";
  }

  @Post("registrar")
  registraUsuario(): string {
    return "Hola Jorge 2";
  }

  @Patch("actualizar")
  actualizarUsuario(): string {
    return "Hola Jorge 3";
  }
}
