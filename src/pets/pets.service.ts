import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PetsService {

  constructor(private prisma: PrismaService) { }

  async create(newPet: CreatePetDto){
    return await this.prisma.pet.create({ data: newPet })
  }

  async findAll() {
    return await this.prisma.pet.findMany();
  }

  async findOne(id: string) {
    const pet = await this.prisma.pet.findUnique({ where: { id } });

    if (!pet) return null;

    return pet;
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    const pet = await this.prisma.pet.findUnique({ where: { id } });
    if (!pet) return null;
    return await this.prisma.pet.update({ data: { ...updatePetDto }, where: { id: pet.id } });
  }


  async remove(id: string) {
    const pet = await this.prisma.pet.findUnique({where : { id } });

    if (!pet) return null;

    await this.prisma.pet.delete({where: {id: pet.id}})

  }
}
