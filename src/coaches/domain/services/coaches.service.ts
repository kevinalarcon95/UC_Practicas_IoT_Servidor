import { coaches } from "../models/coaches.model";

export interface coachesService {

   /**
    * Retorna la lista de coaches
    */
   listar(): coaches[];

   /**
    * Crea una nueva moto
    * @param coaches datos del nuevo entrenador
    * @return Nuevo entrenador
    */
   crear(coaches: coaches): coaches;

   /**
    * Actualiza datos de entrenador
    * @param id Identificador único del entrenador
    * @param coaches datos del entrenador
    * @return entrenador modificado
    */
   modificar(id: number, coaches: coaches): coaches

   /**
    * Eliminar un entrenador
    * @param id Identificador único del entrenador
    * @return True si eliminó al entrenador
    */
   eliminar(id: number): boolean

   /**
    * Cambia la edad de un entrenador
    * @param id Identificador único del entrenador
    * @param age nuevo valor de edad 
    */
   cambiarEdad(id: number, age: number): coaches
}