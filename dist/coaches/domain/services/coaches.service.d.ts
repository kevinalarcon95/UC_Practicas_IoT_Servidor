import { InsertResult, UpdateResult } from 'typeorm';
import { CoachEntity } from '../entities/coaches.entity';
export interface coachesService {
    listar(): Promise<CoachEntity[]>;
    crear(coaches: CoachEntity): Promise<InsertResult>;
    modificar(id: number, coaches: CoachEntity): Promise<UpdateResult>;
    eliminar(id: number): Promise<boolean>;
    cambiarEdad(id: number, age: number): Promise<UpdateResult>;
}
