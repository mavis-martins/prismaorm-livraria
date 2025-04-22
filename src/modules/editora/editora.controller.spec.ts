import { Test, TestingModule } from '@nestjs/testing';
import { EditoraController } from './editora.controller';

describe('EditoraController', () => {
  let controller: EditoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditoraController],
    }).compile();

    controller = module.get<EditoraController>(EditoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
