/* eslint-disable prettier/prettier */
// src/livro/livro.service.ts
import { Injectable } from "@nestjs/common";
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLivroDto } from "./dto/livro.dto";

@Injectable()
export class LivroService {
  constructor(private readonly prisma: PrismaService) {}

  async listarTodos() {
    return this.prisma.livro.findMany({
      include: { autores: true, categorias: true, editora: true },
    });
  }

  async criar(dados: CreateLivroDto) {
    return this.prisma.livro.create({ data: dados });
  }
}
