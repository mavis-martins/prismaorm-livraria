/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { LivroService } from './livro.service';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLivroDto, TipoLivro } from './dto/livro.dto';

const prismaServiceMock = {
  livro: {
    findMany: jest.fn(),
    create: jest.fn(),
  },
};

describe('LivroService', () => {
  let service: LivroService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LivroService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    service = module.get<LivroService>(LivroService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('listarTodos', () => {
    it('Método para obter todos os livros', async () => {
      const mockLivros = [
        {
          id: '1',
          titulo: 'Livro Teste',
          preco: 29.9,
          tipo: TipoLivro.IMPRESSO,
          estoque: 5,
          frete: 5.0,
          editora: { nome: 'Editora Teste' },
          autores: [{ autor: { nome: 'Autor Teste' } }],
          categorias: [{ categoria: { nome: 'Categoria Teste' } }],
        },
      ];

      prismaServiceMock.livro.findMany.mockResolvedValue(mockLivros);

      const resultado = await service.listarTodos();

      expect(resultado).toHaveLength(1);
      expect(resultado[0]).toEqual({
        id: '1',
        titulo: 'Livro Teste',
        preco: 29.9,
        tipo: TipoLivro.IMPRESSO,
        estoque: 5,
        frete: 5.0,
        editora: 'Editora Teste',
        autores: ['Autor Teste'],
        categorias: ['Categoria Teste'],
      });
    });

    describe('criar', () => {
      it('Método para criar um novo livro', async () => {
        const novoLivro: CreateLivroDto = {
          titulo: 'Novo Livro',
          preco: 39.9,
          tipo: TipoLivro.IMPRESSO,
          estoque: 5,
          frete: 7.5,
          editoraId: 1,
        };

        const livroCriado = {
          id: '1',
          ...novoLivro,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        prismaServiceMock.livro.create.mockResolvedValue(livroCriado);

        const resultado = await service.criar(novoLivro);

        expect(prismaService.livro.create).toHaveBeenCalledWith({
          data: novoLivro,
        });

        expect(resultado).toEqual(livroCriado);
      });
    });
  });
});
