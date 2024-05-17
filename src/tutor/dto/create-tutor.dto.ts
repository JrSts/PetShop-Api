import { Type } from "class-transformer";
import { IsArray, IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, IsStrongPassword, ValidateNested } from "class-validator";
import { CreatePetDto } from "src/pets/dto/create-pet.dto";

export class CreateTutorDto {

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
	email: string;

  @IsMobilePhone()
  @IsNotEmpty()
	telefone : string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  senha : string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePetDto)
	pets : CreatePetDto[];

}
