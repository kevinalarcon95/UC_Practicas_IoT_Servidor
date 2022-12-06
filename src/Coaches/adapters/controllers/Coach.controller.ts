import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CoachService } from '../../domain/services/Coach.service';
import {Coach} from '../../domain/models/Coach.model';

const errReturn = (e: Error, message: string) => {
   return {
      message: message,
      error: e
   }
}

@Controller()
export class coachController {
   constructor(private readonly coachService: CoachService) { }

   @Get()
   getHello() {
      try{
         return this.coachService.list();
      }
      catch(e){
         return errReturn(e, "Error al listar entrenadores");
      }
   }

   @Post()
   create(@Body() coach: Coach){
      try{
         return this.coachService.create(coach);
      }
      catch(e){
         return errReturn(e, "Error al crear entrenador");
      }
   }

   @Put(":id")
   update(@Body() coach: Coach, @Param('id') id: number){
      try{
         return this.coachService.update(coach, id);
      }
      catch(e){
         return errReturn(e, "Error al modificar entrenador");
      }
   }

   @Delete(":id")
   delete(@Param('id') id: number) {
      try{
         return this.coachService.delete(id);
      }
      catch(e){
         return errReturn(e, "Error al eliminar entrenador");
      }
   }

   @Patch(":id/age/:age")
   updateAge(@Param('id') id: number, @Param('age') age: number) {
      try{
         return this.coachService.updateAge(id, age);
      }
      catch(e){
         return errReturn(e, "Error al modificar edad del entrenador");
      }
   }

}