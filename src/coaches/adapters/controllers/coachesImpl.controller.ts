import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { coachesService } from '../../domain/services/coaches.service';

import { coaches } from '../../domain/models/coaches.model';
import { CoachesController } from './coaches.controller';
import { AuthGuard } from '@nestjs/passport';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class CoachesControllerImpl implements CoachesController {
  constructor(@Inject('CoachesService') private readonly Coacheservice: coachesService) { }

  @Get()
  listarcoaches() {
    try{
      return this.Coacheservice.listar();
    }
    catch(e){
      return errReturn(e, "Error al listar de Coaches");
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post()
  crear(@Body() datos: coaches) {
    try{
      return this.Coacheservice.crear(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear entrenador");
    }
  }

  @Put(":id")
  modificar(@Body() datos: coaches, @Param('id') id: number) {
    try{
      return this.Coacheservice.modificar(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar entrenador");
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number) {
    try{
      return this.Coacheservice.eliminar(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar entrenador");
    }
  }

  @Patch(":id/edad/:edad")
  cambiarEdad(@Param('id') id: number, @Param('edad') edad: number) {
    try{
      return this.Coacheservice.cambiarEdad(id, edad);
    }
    catch(e){
      return errReturn(e, "Error al modificar edad del entrenador");
    }
  }
}