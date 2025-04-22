/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLivroAutorDto } from './dto/livroAutor.dto';

@Injectable()
export class LivroAutorService {
    constructor(private prisma: PrismaService) {}
  
    async criar(data: CreateLivroAutorDto) {
      return this.prisma.livroAutor.create({ data });
    }
  
    async listar() {
      return this.prisma.livroAutor.findMany({ include: { livro: true, autor: true } });
    }
  
    async deletar(id: number) {
      return this.prisma.livroAutor.delete({ where: { id } });
    }
  }
