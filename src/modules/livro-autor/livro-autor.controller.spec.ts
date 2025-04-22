import { Test, TestingModule } from '@nestjs/testing';
import { LivroAutorController } from './livro-autor.controller';

describe('LivroAutorController', () => {
  let controller: LivroAutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivroAutorController],
    }).compile();

    controller = module.get<LivroAutorController>(LivroAutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
