import { coachesService } from '../../domain/services/coaches.service';
import { CoachController } from './coaches.controller';
import { CoachEntity } from 'src/coaches/domain/entities/coaches.entity';
export declare class CoachControllerImpl implements CoachController {
    private readonly coachesServices;
    constructor(coachesServices: coachesService);
    listar(): (() => Promise<CoachEntity[]>) | {
        message: string;
        error: Error;
    };
    crear(datos: CoachEntity): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").InsertResult>;
    modificar(datos: CoachEntity, id: number): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").UpdateResult>;
    eliminar(id: number): {
        message: string;
        error: Error;
    } | Promise<boolean>;
    cambiarEdad(id: number, edad: number): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").UpdateResult>;
}
