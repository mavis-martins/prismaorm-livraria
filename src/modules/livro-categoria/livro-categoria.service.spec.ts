import { Test, TestingModule } from '@nestjs/testing';
import { LivroCategoriaService } from './livro-categoria.service';

describe('LivroCategoriaService', () => {
  let service: LivroCategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivroCategoriaService],
    }).compile();

    service = module.get<LivroCategoriaService>(LivroCategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
