import { Module } from '@nestjs/common';
import { LivroVendaService } from './livro-venda.service';
import { LivroVendaController } from './livro-venda.controller';

@Module({
  providers: [LivroVendaService],
  controllers: [LivroVendaController]
})
export class LivroVendaModule {}
