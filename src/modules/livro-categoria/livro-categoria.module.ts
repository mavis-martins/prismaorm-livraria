import { Module } from '@nestjs/common';
import { LivroCategoriaService } from './livro-categoria.service';
import { LivroCategoriaController } from './livro-categoria.controller';

@Module({
  providers: [LivroCategoriaService],
  controllers: [LivroCategoriaController]
})
export class LivroCategoriaModule {}
