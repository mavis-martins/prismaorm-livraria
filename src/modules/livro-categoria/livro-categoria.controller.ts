/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LivroCategoriaService } from './livro-categoria.service';
import { CreateLivroCategoriaDto } from './dto/livroCategoria.dto';


@Controller('livros-categorias')
export class LivroCategoriaController {
    constructor(private readonly service: LivroCategoriaService) {}
  
    @Post()
    criar(@Body() data: CreateLivroCategoriaDto) {
      return this.service.criar(data);
    }
  
    @Get()
    listar() {
      return this.service.listar();
    }
  
    @Delete(':id')
    deletar(@Param('id') id: string) {
      return this.service.deletar(Number(id));
    }
  }
