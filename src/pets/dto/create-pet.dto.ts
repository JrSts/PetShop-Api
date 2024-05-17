import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePetDto {
  
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  tutorId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  categoria: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  raca: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  idade: number;

}
