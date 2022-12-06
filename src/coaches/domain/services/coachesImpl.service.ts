import { Injectable } from '@nestjs/common';
import { coaches } from '../models/coaches.model';
import { coachesService } from './coaches.service';


@Injectable()
export class coachesServiceImpl implements coachesService {

  private coach: coaches[] = [{
    nombre: 'Andres felipe',
    apellido: 'Perez mora',
    edad: 27,
    team: 'Colombia'
  }]

  public listar() : coaches[] {
    return this.coach
  }

  public crear(coaches: coaches): coaches {
    this.coach.push(coaches);
    return coaches;
  }

  public modificar(id: number, coaches: coaches): coaches {
      this.coach[id] = coaches
      return this.coach[id];
  }

  public eliminar(id: number): boolean {
    const totalcoachesAntes = this.coach.length;
    this.coach = this.coach.filter((val, index) => index != id);
    if(totalcoachesAntes == this.coach.length){
      return false;
    }
    else{
      return true;
    }
  }

   public cambiarEdad(id: number, edad: number): coaches {
      this.coach[id].edad = edad;
      return this.coach[id];
   }

}
