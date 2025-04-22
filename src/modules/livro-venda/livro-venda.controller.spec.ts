import { Test, TestingModule } from '@nestjs/testing';
import { LivroVendaController } from './livro-venda.controller';

describe('LivroVendaController', () => {
  let controller: LivroVendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivroVendaController],
    }).compile();

    controller = module.get<LivroVendaController>(LivroVendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
