/* eslint-disable prettier/prettier */
import { IsNumber } from 'class-validator';

export class CreateLivroCategoriaDto {
  @IsNumber()
  livroId: number;

  @IsNumber()
  categoriaId: number;
}