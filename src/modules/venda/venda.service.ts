/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VendaService {
    constructor(private prisma: PrismaService) {}
  
    async criar(data: Prisma.VendaCreateInput) {
      return this.prisma.venda.create({ data });
    }
  
    async listar() {
      return this.prisma.venda.findMany({ include: { livros: true } });
    }
  
    async buscarPorId(id: number) {
      return this.prisma.venda.findUnique({ where: { id } });
    }
  
    async atualizar(id: number, data: Prisma.VendaUpdateInput) {
      return this.prisma.venda.update({ where: { id }, data });
    }
  
    async deletar(id: number) {
      return this.prisma.venda.delete({ where: { id } });
    }
  }
