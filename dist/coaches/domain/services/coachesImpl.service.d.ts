import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { CoachEntity } from '../entities/coaches.entity';
import { coachesService } from './coaches.service';
export declare class coachesServiceImpl implements coachesService {
    private readonly repository;
    constructor(repository: MongoRepository<CoachEntity>);
    listar(): Promise<CoachEntity[]>;
    crear(coaches: CoachEntity): Promise<InsertResult>;
    modificar(id: number, coaches: CoachEntity): Promise<UpdateResult>;
    eliminar(id: number): Promise<boolean>;
    cambiarEdad(id: number, age: number): Promise<UpdateResult>;
}
