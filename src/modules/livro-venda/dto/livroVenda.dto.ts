/* eslint-disable prettier/prettier */
import { IsNumber } from 'class-validator';

export class CreateLivroVendaDto {
  @IsNumber()
  livroId: number;

  @IsNumber()
  vendaId: number;

  @IsNumber()
  preco: number;

  @IsNumber()
  quantidade: number;
}