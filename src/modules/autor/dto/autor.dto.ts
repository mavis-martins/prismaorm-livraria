/* eslint-disable prettier/prettier */
import { IsString, MinLength } from 'class-validator';

export class CreateAutorDto {
  @IsString()
  @MinLength(2)
  nome: string;
}