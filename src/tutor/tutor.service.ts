import { Injectable } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { PrismaService } from 'src/database/prisma.service';
import { send } from 'process';

@Injectable()
export class TutorService {
  constructor(private prisma: PrismaService) {}

  async create(newTutor: CreateTutorDto) {
    console.log('newTutor', newTutor);
    return await this.prisma.tutor.create({
      data: {
        nome: newTutor.nome,
        email: newTutor.email,
        telefone: newTutor.telefone,
        senha: newTutor.senha,
      },
    });
  }

  async findAll() {
    return await this.prisma.tutor.findMany({
      include: { pets: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.tutor.findFirst({
      where: { id },
      include: { pets: true },
    });
  }

  async update(id: string, updateTutorDto: UpdateTutorDto) {
    return await this.prisma.tutor.update({
      where: { id },
      data: {
        nome: updateTutorDto.nome,
        email: updateTutorDto.email,
        telefone: updateTutorDto.telefone
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.tutor.delete({
      where: { id }
    });
  }
}
