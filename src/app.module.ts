/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { LivroModule } from './modules/livro/livro.module';

@Module({
  imports: [PrismaModule, LivroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
