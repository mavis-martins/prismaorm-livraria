/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsEnum, IsOptional} from 'class-validator';


export enum TipoLivro {
    IMPRESSO = 'IMPRESSO',
    ELETRONICO = 'ELETRONICO'
  }
  
  export class CreateLivroDto {
    @IsString()
    titulo: string;
  
    @IsNumber()
    preco: number;
  
    @IsEnum(TipoLivro)
    tipo: TipoLivro;
  
    @IsOptional()
    @IsNumber()
    estoque?: number;
  
    @IsNumber()
    @IsOptional()
    frete?: number;
  
    @IsOptional()
    @IsNumber()
    tamanhoArquivo?: number;
  
    @IsNumber()
    editoraId: number;
  }