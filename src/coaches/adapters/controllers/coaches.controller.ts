import { CoachEntity } from 'src/coaches/domain/entities/coaches.entity';


export interface CoachController {

   listar();


   crear(datos: CoachEntity);


   modificar(datos: CoachEntity, id: number);


   eliminar(id: number);


   cambiarEdad(id: number, edad: number);

}