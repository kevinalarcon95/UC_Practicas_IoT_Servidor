import { coaches } from "../models/coaches.model";
export interface coachesService {
    listar(): coaches[];
    crear(coaches: coaches): coaches;
    modificar(id: number, coaches: coaches): coaches;
    eliminar(id: number): boolean;
    cambiarEdad(id: number, age: number): coaches;
}
