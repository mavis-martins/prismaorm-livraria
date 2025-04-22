/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LivroVendaService } from './livro-venda.service';
import { CreateLivroVendaDto } from './dto/livroVenda.dto';

@Controller('livro-venda')
export class LivroVendaController {
    constructor(private readonly service: LivroVendaService) {}
  
    @Post()
    criar(@Body() data: CreateLivroVendaDto) {
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
