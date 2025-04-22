/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { CreateEditoraDto } from './dto/editora.dto';

@Controller('editoras')
export class EditoraController {
  constructor(private readonly editoraService: EditoraService) {}

  @Post()
  criar(@Body() data: CreateEditoraDto) {
    return this.editoraService.criar(data);
  }

  @Get()
  listar() {
    return this.editoraService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.editoraService.buscarPorId(Number(id));
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() data: CreateEditoraDto) {
    return this.editoraService.atualizar(Number(id), data);
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.editoraService.deletar(Number(id));
  }
}
