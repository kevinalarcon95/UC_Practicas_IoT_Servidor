import {coaches} from '../../domain/models/coaches.model';

export interface CoachesController {
   /**
    *  Retorna la lista de coaches
    */
   listarcoaches();

   /**
    * Crea un entrenador
    * @param datos Objeto con datos de entrenador
    */
   crear(datos: coaches);

   /**
    * Modifica datos de un entrenador
    * @param datos Objeto con datos del entrenador
    * @param id Identificador único del entrenador
    */
   modificar(datos: coaches, id: number);

   /**
    * Elimina un entrenador
    * @param id Identificador único del entrenador
    */
   eliminar(id: number);

   /**
    * Cambia la edad de un entrenador
    * @param id Identificador único del entrenador
    * @param edad edad del entrenador
    */
   cambiarEdad(id: number, edad: number);

}