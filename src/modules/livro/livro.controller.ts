/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/livro.dto';

@Controller('livros')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Get()
  listarTodos() {
    return this.livroService.listarTodos();
  }

  @Post()
  criar(@Body() dados: CreateLivroDto) {
    return this.livroService.criar(dados);
  }
}
