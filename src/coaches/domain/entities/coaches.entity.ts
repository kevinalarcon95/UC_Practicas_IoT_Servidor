import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class CoachEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   nombre: string;

   @Column()
   apellido: string;

   @Column()
   edad: number;

   @Column()
   team: string;
}