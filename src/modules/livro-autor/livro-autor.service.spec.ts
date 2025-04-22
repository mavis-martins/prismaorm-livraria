import { Test, TestingModule } from '@nestjs/testing';
import { LivroAutorService } from './livro-autor.service';

describe('LivroAutorService', () => {
  let service: LivroAutorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivroAutorService],
    }).compile();

    service = module.get<LivroAutorService>(LivroAutorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
