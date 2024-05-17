import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateFuncionarioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsMobilePhone()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  senha: string;
}
