import { Injectable } from '@nestjs/common';
import {Coach} from '../../domain/models/Coach.model';

@Injectable()
export class CoachService {

   // Como no hay base de datos aun empleamos una variable en memoria:
   private coach: Coach[] = [{
      name: 'Ash',
      lastName: 'Ketchum',
      age: 10,
      placeBirth: 'Kanto'
   }]
 
   public list(): Coach[]{
      return this.coach;
   }

   public create(coach: Coach){
      this.coach.push(coach)
      return coach;
   }

   public update(coach: Coach, id: number): Coach{
      this.coach[id] = coach
      return this.coach[id];
   }

   delete(id: number): boolean {
      const totalCoachBefore = this.coach.length;
      this.coach = this.coach.filter((val, index) => index != id);
      if(totalCoachBefore == this.coach.length){
         return false;
      }
      else{
         return true;
      }
   }

   public updateAge(id: number, age: number): Coach{
      this.coach[id].age = age;
      return this.coach[id];
   }

}