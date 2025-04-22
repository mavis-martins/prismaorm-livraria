/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLivroVendaDto } from './dto/livroVenda.dto';

@Injectable()
export class LivroVendaService {
    constructor(private prisma: PrismaService) {}
  
    async criar(data: CreateLivroVendaDto) {
      return this.prisma.livroVenda.create({ data });
    }
  
    async listar() {
      return this.prisma.livroVenda.findMany({ include: { livro: true, venda: true } });
    }
  
    async deletar(id: number) {
      return this.prisma.livroVenda.delete({ where: { id } });
    }
  }
