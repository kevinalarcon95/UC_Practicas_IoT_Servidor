import { Module } from '@nestjs/common';
import { CoachControllerImpl } from './coaches/adapters/controllers/coachesImpl.controller';
import { coachesServiceImpl } from './coaches/domain/services/coachesImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoachEntity } from './coaches/domain/entities/coaches.entity';

@Module({
  imports: [
     AuthModule,
     UsersModule,
     TypeOrmModule.forRoot({
        type: 'mongodb',
        url: 'mongodb+srv://user:user@cluster0.v6v7z2l.mongodb.net/?retryWrites=true&w=majority',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        synchronize: true, // Solo para desarrollo
        logging: true,
        autoLoadEntities: true,
        ssl: true,
     }),
     TypeOrmModule.forFeature([CoachEntity]),
    UsersModule,
  ],
  controllers: [CoachControllerImpl],
  providers: [
     {
        provide: 'TabletService',
        useClass: coachesServiceImpl,
     },
  ],
  })
  export class AppModule {}