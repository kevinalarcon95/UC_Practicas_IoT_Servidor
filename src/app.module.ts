import { Module } from '@nestjs/common';
import { CoachesControllerImpl } from './coaches/adapters/controllers/coachesImpl.controller';
import { coachesServiceImpl } from './coaches/domain/services/coachesImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [CoachesControllerImpl],
  providers: [
    {
      provide: 'CoachesService',
      useClass: coachesServiceImpl
    }
  ],
})
export class AppModule {}
