/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [LivroService, PrismaService],
  controllers: [LivroController],
})
export class LivroModule {}
