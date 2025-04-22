/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { LivroModule } from './modules/livro/livro.module';
import { EditoraModule } from './modules/editora/editora.module';
import { LivroAutorModule } from './modules/livro-autor/livro-autor.module';
import { AutorModule } from './modules/autor/autor.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { LivroCategoriaModule } from './modules/livro-categoria/livro-categoria.module';
import { LivroVendaModule } from './modules/livro-venda/livro-venda.module';
import { VendaModule } from './modules/venda/venda.module';

@Module({
  imports: [
    PrismaModule,
    LivroModule,
    EditoraModule,
    LivroAutorModule,
    AutorModule,
    CategoriaModule,
    LivroCategoriaModule,
    LivroVendaModule,
    VendaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
