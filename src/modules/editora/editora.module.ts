import { Module } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { EditoraController } from './editora.controller';

@Module({
  providers: [EditoraService],
  controllers: [EditoraController],
})
export class EditoraModule {}
