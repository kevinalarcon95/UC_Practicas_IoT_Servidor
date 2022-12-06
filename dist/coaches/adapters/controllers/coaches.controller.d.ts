import { coaches } from '../../domain/models/coaches.model';
export interface CoachesController {
    listarcoaches(): any;
    crear(datos: coaches): any;
    modificar(datos: coaches, id: number): any;
    eliminar(id: number): any;
    cambiarEdad(id: number, edad: number): any;
}
