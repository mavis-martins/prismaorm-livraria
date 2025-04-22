import { Module } from '@nestjs/common';
import { LivroAutorService } from './livro-autor.service';
import { LivroAutorController } from './livro-autor.controller';

@Module({
  providers: [LivroAutorService],
  controllers: [LivroAutorController]
})
export class LivroAutorModule {}
