/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AutorService {
  constructor(private prisma: PrismaService) {}

  async criar(data: Prisma.AutorCreateInput) {
    return this.prisma.autor.create({ data });
  }

  async listar() {
    return this.prisma.autor.findMany({ include: { livros: true } });
  }

  async buscarPorId(id: number) {
    return this.prisma.autor.findUnique({ where: { id } });
  }

  async atualizar(id: number, data: Prisma.AutorUpdateInput) {
    return this.prisma.autor.update({ where: { id }, data });
  }

  async deletar(id: number) {
    return this.prisma.autor.delete({ where: { id } });
  }
}



