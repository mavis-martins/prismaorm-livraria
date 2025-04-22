/* eslint-disable prettier/prettier */
import { IsNumber } from 'class-validator';

export class CreateLivroAutorDto {
  @IsNumber()
  livroId: number;

  @IsNumber()
  autorId: number;
}