/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateVendaDto {
  @IsString()
  nome: string;

  @IsNumber()
  valorTotal: number;

  @IsDateString()
  data: string;
}