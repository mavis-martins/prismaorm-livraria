/* eslint-disable prettier/prettier */
// src/editora/dto/editora.dto.ts
import { IsString, MinLength } from 'class-validator';

export class CreateEditoraDto {
  @IsString()
  @MinLength(2)
  nome: string;
}
