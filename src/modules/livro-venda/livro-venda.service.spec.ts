import { Test, TestingModule } from '@nestjs/testing';
import { LivroVendaService } from './livro-venda.service';

describe('LivroVendaService', () => {
  let service: LivroVendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivroVendaService],
    }).compile();

    service = module.get<LivroVendaService>(LivroVendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
