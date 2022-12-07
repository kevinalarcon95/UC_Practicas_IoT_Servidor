import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { CoachEntity } from '../entities/coaches.entity';
import { coachesService } from './coaches.service';

@Injectable()
export class coachesServiceImpl implements coachesService {
  
  constructor(
    @InjectRepository(CoachEntity)
    private readonly repository: MongoRepository<CoachEntity>,
  ) {}


  public async listar(): Promise<CoachEntity[]> {
    return await this.repository.find();
  }
  public async crear(coaches: CoachEntity): Promise<InsertResult> {
    const newTablet = await this.repository.insert(coaches);
    return newTablet;
  }
  public async modificar(id: number, coaches: CoachEntity): Promise<UpdateResult> {
    const updatedTablet = await this.repository.update(id, coaches);
    return updatedTablet;
  }
  public async eliminar(id: number): Promise<boolean> {
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }
  public async cambiarEdad(id: number, age: number): Promise<UpdateResult> {
    const updated = await this.repository.update(id, { edad: age });
    return updated;
  }

  

  

}
