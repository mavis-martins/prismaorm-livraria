/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/categoria.dto';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly service: CategoriaService) {}

  @Post()
  criar(@Body() data: CreateCategoriaDto) {
    return this.service.criar(data);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.service.buscarPorId(Number(id));
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() data: CreateCategoriaDto) {
    return this.service.atualizar(Number(id), data);
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.service.deletar(Number(id));
  }
}
