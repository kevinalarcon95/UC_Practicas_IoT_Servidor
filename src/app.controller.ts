import { Body, Controller, Get, Param, Post, Delete, Patch, Put } from '@nestjs/common';
import { AppService } from './app.service';

interface Persona {
  nombre: string,
  edad: number,
  profesion: string
  telefono: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 
  private personas : Persona[] = [{
    nombre: "Kevin Alarcón",
    edad: 27,
    profesion: "Estudiante",
    telefono: 3124567890
  }]

  @Get()
  getHello(): Persona[] {
    return this.personas;
  }

  crear(@Body() datos: Persona): Persona {
    this.personas.push(datos);
    return datos;
  }
  
  @Put(":id")
  modificar(@Body() datos: Persona, @Param('id') id: number): Persona | string {
    try{
      this.personas[id] = datos
      return this.personas[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.personas = this.personas.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/telefono/:telefono")
  cambiarTelefono(@Param('id') id: number, @Param('telefono') telefono: number): Persona | string{
    try{
      this.personas[id].telefono = telefono;
      return this.personas[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }
}
