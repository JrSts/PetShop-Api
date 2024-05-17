import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, NotFoundException } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() pet: CreatePetDto) {
    return await this.petsService.create(pet);
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const pet = await this.petsService.findOne(id);

    if (!pet) throw new NotFoundException();

    return pet;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    const pet = await this.petsService.findOne(id);

    if (!pet) throw new NotFoundException();

    return await this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const pet = await this.petsService.findOne(id);

    if (!pet) throw new NotFoundException();

    await this.petsService.remove(id);
  }
}
