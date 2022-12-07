import { CoachEntity } from 'src/coaches/domain/entities/coaches.entity';
export interface CoachController {
    listar(): any;
    crear(datos: CoachEntity): any;
    modificar(datos: CoachEntity, id: number): any;
    eliminar(id: number): any;
    cambiarEdad(id: number, edad: number): any;
}
