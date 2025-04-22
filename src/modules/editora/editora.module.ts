import { Module } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { EditoraController } from './editora.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [EditoraService, PrismaService],
  controllers: [EditoraController],
})
export class EditoraModule {}
