-- CreateEnum
CREATE TYPE "TipoLivro" AS ENUM ('IMPRESSO', 'ELETRONICO');

-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "tipo" "TipoLivro" NOT NULL,
    "estoque" INTEGER,
    "frete" DOUBLE PRECISION,
    "tamanhoArquivo" DOUBLE PRECISION,
    "editoraId" INTEGER,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Editora" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Editora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venda" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Venda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LivroCategoria" (
    "id" SERIAL NOT NULL,
    "livroId" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "LivroCategoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LivroAutor" (
    "id" SERIAL NOT NULL,
    "livroId" INTEGER NOT NULL,
    "autorId" INTEGER NOT NULL,

    CONSTRAINT "LivroAutor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LivroVenda" (
    "id" SERIAL NOT NULL,
    "livroId" INTEGER NOT NULL,
    "vendaId" INTEGER NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "LivroVenda_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_editoraId_fkey" FOREIGN KEY ("editoraId") REFERENCES "Editora"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroCategoria" ADD CONSTRAINT "LivroCategoria_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroCategoria" ADD CONSTRAINT "LivroCategoria_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroAutor" ADD CONSTRAINT "LivroAutor_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroAutor" ADD CONSTRAINT "LivroAutor_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroVenda" ADD CONSTRAINT "LivroVenda_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroVenda" ADD CONSTRAINT "LivroVenda_vendaId_fkey" FOREIGN KEY ("vendaId") REFERENCES "Venda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
