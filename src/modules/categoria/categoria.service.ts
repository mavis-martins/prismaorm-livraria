/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async criar(data: Prisma.CategoriaCreateInput) {
    return this.prisma.categoria.create({ data });
  }

  async listar() {
    return this.prisma.categoria.findMany({ include: { livros: true } });
  }

  async buscarPorId(id: number) {
    return this.prisma.categoria.findUnique({ where: { id } });
  }

  async atualizar(id: number, data: Prisma.CategoriaUpdateInput) {
    return this.prisma.categoria.update({ where: { id }, data });
  }

  async deletar(id: number) {
    return this.prisma.categoria.delete({ where: { id } });
  }
}
