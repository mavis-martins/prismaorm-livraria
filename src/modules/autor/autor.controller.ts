/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/autor.dto';

@Controller('autores')
export class AutorController {
  constructor(private readonly service: AutorService) {}

  @Post()
  criar(@Body() data: CreateAutorDto) {
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
  atualizar(@Param('id') id: string, @Body() data: CreateAutorDto) {
    return this.service.atualizar(Number(id), data);
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.service.deletar(Number(id));
  }
}
