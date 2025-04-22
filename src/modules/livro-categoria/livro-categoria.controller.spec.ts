import { Test, TestingModule } from '@nestjs/testing';
import { LivroCategoriaController } from './livro-categoria.controller';

describe('LivroCategoriaController', () => {
  let controller: LivroCategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivroCategoriaController],
    }).compile();

    controller = module.get<LivroCategoriaController>(LivroCategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
