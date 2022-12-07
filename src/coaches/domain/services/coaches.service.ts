import { InsertResult, UpdateResult } from 'typeorm';
import { CoachEntity } from '../entities/coaches.entity';

export interface coachesService {

   /**
    * Retorna la lista de coaches
    */
   listar(): Promise<CoachEntity[]>;

   /**
    * Crea una nueva moto
    * @param coaches datos del nuevo entrenador
    * @return Nuevo entrenador
    */
   crear(coaches: CoachEntity): Promise<InsertResult>;

   /**
    * Actualiza datos de entrenador
    * @param id Identificador único del entrenador
    * @param coaches datos del entrenador
    * @return entrenador modificado
    */
   modificar(id: number, coaches: CoachEntity):  Promise<UpdateResult>;

   /**
    * Eliminar un entrenador
    * @param id Identificador único del entrenador
    * @return True si eliminó al entrenador
    */
   eliminar(id: number): Promise<boolean>;

   /**
    * Cambia la edad de un entrenador
    * @param id Identificador único del entrenador
    * @param age nuevo valor de edad 
    */
   cambiarEdad(id: number, age: number):  Promise<UpdateResult>;
}