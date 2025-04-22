/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLivroCategoriaDto } from './dto/livroCategoria.dto';

@Injectable()
export class LivroCategoriaService {
  constructor(private prisma: PrismaService) {}

  async criar(data: CreateLivroCategoriaDto) {
    return this.prisma.livroCategoria.create({
      data: {
        livro: {
          connect: { id: data.livroId },
        },
        categoria: {
          connect: { id: data.categoriaId },
        },
      },
      include: {
        livro: true,
        categoria: true
      }
    });
  }

  async listar() {
    return this.prisma.livroCategoria.findMany({
      include: { livro: true, categoria: true },
    });
  }

  async deletar(id: number) {
    return this.prisma.livroCategoria.delete({ where: { id } });
  }
}
