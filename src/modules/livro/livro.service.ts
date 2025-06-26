/* eslint-disable prettier/prettier */
// src/livro/livro.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLivroDto } from './dto/livro.dto';

@Injectable()
export class LivroService {
  constructor(private readonly prisma: PrismaService) {}

  async listarTodos() {
    const livros = await this.prisma.livro.findMany({
      include: {
        autores: {
          include: {
            autor: true,
          },
        },
        categorias: {
          include: {
            categoria: true,
          },
        },
        editora: true,
      },
    });

    return livros.map((livro) => ({
      id: livro.id,
      titulo: livro.titulo,
      preco: livro.preco,
      tipo: livro.tipo,
      ...(livro.tipo === 'IMPRESSO' && { estoque: livro.estoque }),
      ...(livro.tipo === 'ELETRONICO' && {
        tamanhoArquivo: livro.tamanhoArquivo,
      }),
      ...(livro.tipo === 'IMPRESSO' && { frete: livro.frete }),
      editora: livro.editora?.nome,
      autores: livro.autores.map((a) => a.autor.nome),
      categorias: livro.categorias.map((c) => c.categoria.nome)
    }));
  }

  async criar(dados: CreateLivroDto) {
    return this.prisma.livro.create({ data: dados });
  }
}
