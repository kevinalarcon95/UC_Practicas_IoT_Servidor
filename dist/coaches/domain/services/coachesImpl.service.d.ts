import { coaches } from '../models/coaches.model';
import { coachesService } from './coaches.service';
export declare class coachesServiceImpl implements coachesService {
    private coach;
    listar(): coaches[];
    crear(coaches: coaches): coaches;
    modificar(id: number, coaches: coaches): coaches;
    eliminar(id: number): boolean;
    cambiarEdad(id: number, edad: number): coaches;
}
