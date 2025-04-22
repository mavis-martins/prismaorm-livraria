/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LivroAutorService } from './livro-autor.service';
import { CreateLivroAutorDto } from './dto/livroAutor.dto';

@Controller('livro-autor')
export class LivroAutorController {
    constructor(private readonly service: LivroAutorService) {}
  
    @Post()
    criar(@Body() data: CreateLivroAutorDto) {
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
