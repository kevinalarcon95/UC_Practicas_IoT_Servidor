import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { coachesService } from '../../domain/services/coaches.service';

import {coaches} from '../../domain/models/coaches.model';
import { CoachController } from './coaches.controller';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CoachEntity } from 'src/coaches/domain/entities/coaches.entity';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class CoachControllerImpl implements CoachController{
  constructor(@Inject('coachesService') private readonly coachesServices: coachesService) { }
  
  @Get()
  listar() {
    try{
      return this.coachesServices.listar;
    }
    catch(e){
      return errReturn(e, "Error al listar entrenadores");
    }
  }

  @Post()
  crear(@Body() datos: CoachEntity) {
    try{
      return this.coachesServices.crear(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear entrenador");
    }
  }

  @Put(":id")
  modificar(@Body() datos: CoachEntity, id: number) {
    try{
      return this.coachesServices.modificar(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar entrenador");
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number) {
    try{
      return this.coachesServices.eliminar(id)   }
    catch(e){
      return errReturn(e, "Error al eliminar entrenador");
    }
  }

  @Patch(":id/edad/:edad")
  cambiarEdad(@Param('id') id: number, @Param('edad') edad: number) {
    try{
      return this.coachesServices.cambiarEdad(id,edad);
    }
    catch(e){
      return errReturn(e, "Error al modificar edad del entrenador");
    }
  }
}