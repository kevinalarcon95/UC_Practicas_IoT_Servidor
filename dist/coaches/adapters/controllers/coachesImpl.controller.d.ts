import { coachesService } from '../../domain/services/coaches.service';
import { coaches } from '../../domain/models/coaches.model';
import { CoachesController } from './coaches.controller';
export declare class CoachesControllerImpl implements CoachesController {
    private readonly Coacheservice;
    constructor(Coacheservice: coachesService);
    listarcoaches(): coaches[] | {
        message: string;
        error: Error;
    };
    crear(datos: coaches): coaches | {
        message: string;
        error: Error;
    };
    modificar(datos: coaches, id: number): coaches | {
        message: string;
        error: Error;
    };
    eliminar(id: number): boolean | {
        message: string;
        error: Error;
    };
    cambiarEdad(id: number, edad: number): coaches | {
        message: string;
        error: Error;
    };
}
