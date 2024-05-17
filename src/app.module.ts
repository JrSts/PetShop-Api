import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { TutorModule } from './tutor/tutor.module';
import { PrismaModule } from './database/prisma.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ PetsModule, TutorModule, PrismaModule, FuncionarioModule, AuthModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
