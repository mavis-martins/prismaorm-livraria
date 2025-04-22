/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EditoraService {
  constructor(private prisma: PrismaService) {}

  async criar(data: Prisma.EditoraCreateInput) {
    return this.prisma.editora.create({ data });
  }

  async listar() {
    return this.prisma.editora.findMany({
      include: { livros: true },
    });
  }

  async buscarPorId(id: number) {
    return this.prisma.editora.findUnique({ where: { id } });
  }

  async atualizar(id: number, data: Prisma.EditoraUpdateInput) {
    return this.prisma.editora.update({ where: { id }, data });
  }

  async deletar(id: number) {
    return this.prisma.editora.delete({ where: { id } });
  }
}
