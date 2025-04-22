/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VendaService } from './venda.service';
import { CreateVendaDto } from './dto/venda.dto';

@Controller('vendas')
export class VendaController {
    constructor(private readonly service: VendaService) {}
  
    @Post()
    criar(@Body() data: CreateVendaDto) {
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
    atualizar(@Param('id') id: string, @Body() data: CreateVendaDto) {
      return this.service.atualizar(Number(id), data);
    }
  
    @Delete(':id')
    deletar(@Param('id') id: string) {
      return this.service.deletar(Number(id));
    }
  }
