-- CreateEnum
CREATE TYPE "EntidadTipo" AS ENUM ('LIBRO', 'ESCRITOR', 'COMENTARIO', 'LISTA', 'SYSTEM');

-- CreateEnum
CREATE TYPE "NotificacionTipo" AS ENUM ('FOLLOW', 'COMMENT', 'FAVORITE', 'PUBLISH', 'SYSTEM');

-- CreateTable
CREATE TABLE "estado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "color" TEXT,
    "icon" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avatares" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "avatares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etiqueta" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "etiqueta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "tabla" TEXT,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configuracion" (
    "id" SERIAL NOT NULL,
    "valor" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER,
    "tipoId" INTEGER,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "configuracion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "escritor" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT,
    "apellidos" TEXT,
    "alias" TEXT,
    "descripcion" VARCHAR(255) DEFAULT '',
    "fecha_nacimiento" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER,
    "avatarId" INTEGER NOT NULL DEFAULT 1,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "escritor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idioma" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "siglas" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "idioma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "resumen" TEXT NOT NULL,
    "portada" TEXT,
    "publicado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_publicacion" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "escritorId" INTEGER NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,
    "idiomaId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libro_categoria" (
    "libroId" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "libro_categoria_pkey" PRIMARY KEY ("libroId","categoriaId")
);

-- CreateTable
CREATE TABLE "libro_etiqueta" (
    "libroId" INTEGER NOT NULL,
    "etiquetaId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "libro_etiqueta_pkey" PRIMARY KEY ("libroId","etiquetaId")
);

-- CreateTable
CREATE TABLE "capitulo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "indice" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "libroId" INTEGER NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "capitulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parrafo" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT,
    "indice" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "capituloId" INTEGER NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "parrafo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comentario" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "escritorId" INTEGER NOT NULL,
    "parrafoId" INTEGER NOT NULL,
    "comentarioPadreId" INTEGER,
    "tipoId" INTEGER,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorito" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "escritorId" INTEGER,
    "libroId" INTEGER,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "favorito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lista" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "privada" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "lista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lista_libro" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "listaId" INTEGER,
    "libroId" INTEGER,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "lista_libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "glosario" (
    "id" SERIAL NOT NULL,
    "palabra" TEXT,
    "significado" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "libroId" INTEGER NOT NULL,
    "escritorId" INTEGER NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "glosario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nota_autor" (
    "id" SERIAL NOT NULL,
    "texto" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "escritorId" INTEGER NOT NULL,
    "capituloId" INTEGER NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "nota_autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marcador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "color" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "escritorId" INTEGER NOT NULL,
    "parrafoId" INTEGER NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "marcador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seguir_usuario" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "escritorId" INTEGER NOT NULL,
    "escritorSeguidoId" INTEGER NOT NULL,
    "estadoId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "seguir_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacion" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "mensaje" TEXT,
    "tipo" "NotificacionTipo" NOT NULL DEFAULT 'SYSTEM',
    "leida" BOOLEAN NOT NULL DEFAULT false,
    "usuarioId" INTEGER NOT NULL,
    "entidadId" INTEGER,
    "entidadTipo" "EntidadTipo" NOT NULL DEFAULT 'SYSTEM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notificacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "avatares_nombre_key" ON "avatares"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_user_name_key" ON "usuario"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "configuracion_usuarioId_key" ON "configuracion"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "escritor_usuarioId_key" ON "escritor"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "parrafo_id_indice_key" ON "parrafo"("id", "indice");

-- AddForeignKey
ALTER TABLE "categoria" ADD CONSTRAINT "categoria_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "etiqueta" ADD CONSTRAINT "etiqueta_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo" ADD CONSTRAINT "tipo_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuracion" ADD CONSTRAINT "configuracion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuracion" ADD CONSTRAINT "configuracion_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "tipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuracion" ADD CONSTRAINT "configuracion_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "escritor" ADD CONSTRAINT "escritor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "escritor" ADD CONSTRAINT "escritor_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "avatares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "escritor" ADD CONSTRAINT "escritor_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idioma" ADD CONSTRAINT "idioma_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro" ADD CONSTRAINT "libro_escritorId_fkey" FOREIGN KEY ("escritorId") REFERENCES "escritor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro" ADD CONSTRAINT "libro_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro" ADD CONSTRAINT "libro_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro" ADD CONSTRAINT "libro_idiomaId_fkey" FOREIGN KEY ("idiomaId") REFERENCES "idioma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro_categoria" ADD CONSTRAINT "libro_categoria_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro_categoria" ADD CONSTRAINT "libro_categoria_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "libro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro_categoria" ADD CONSTRAINT "libro_categoria_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro_etiqueta" ADD CONSTRAINT "libro_etiqueta_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro_etiqueta" ADD CONSTRAINT "libro_etiqueta_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "libro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro_etiqueta" ADD CONSTRAINT "libro_etiqueta_etiquetaId_fkey" FOREIGN KEY ("etiquetaId") REFERENCES "etiqueta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capitulo" ADD CONSTRAINT "capitulo_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capitulo" ADD CONSTRAINT "capitulo_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parrafo" ADD CONSTRAINT "parrafo_capituloId_fkey" FOREIGN KEY ("capituloId") REFERENCES "capitulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parrafo" ADD CONSTRAINT "parrafo_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_escritorId_fkey" FOREIGN KEY ("escritorId") REFERENCES "escritor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_parrafoId_fkey" FOREIGN KEY ("parrafoId") REFERENCES "parrafo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_comentarioPadreId_fkey" FOREIGN KEY ("comentarioPadreId") REFERENCES "comentario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "tipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorito" ADD CONSTRAINT "favorito_escritorId_fkey" FOREIGN KEY ("escritorId") REFERENCES "escritor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorito" ADD CONSTRAINT "favorito_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "libro"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorito" ADD CONSTRAINT "favorito_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista" ADD CONSTRAINT "lista_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista" ADD CONSTRAINT "lista_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista_libro" ADD CONSTRAINT "lista_libro_listaId_fkey" FOREIGN KEY ("listaId") REFERENCES "lista"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista_libro" ADD CONSTRAINT "lista_libro_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "libro"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista_libro" ADD CONSTRAINT "lista_libro_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "glosario" ADD CONSTRAINT "glosario_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "glosario" ADD CONSTRAINT "glosario_escritorId_fkey" FOREIGN KEY ("escritorId") REFERENCES "escritor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "glosario" ADD CONSTRAINT "glosario_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nota_autor" ADD CONSTRAINT "nota_autor_escritorId_fkey" FOREIGN KEY ("escritorId") REFERENCES "escritor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nota_autor" ADD CONSTRAINT "nota_autor_capituloId_fkey" FOREIGN KEY ("capituloId") REFERENCES "capitulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nota_autor" ADD CONSTRAINT "nota_autor_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marcador" ADD CONSTRAINT "marcador_escritorId_fkey" FOREIGN KEY ("escritorId") REFERENCES "escritor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marcador" ADD CONSTRAINT "marcador_parrafoId_fkey" FOREIGN KEY ("parrafoId") REFERENCES "parrafo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marcador" ADD CONSTRAINT "marcador_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seguir_usuario" ADD CONSTRAINT "seguir_usuario_escritorId_fkey" FOREIGN KEY ("escritorId") REFERENCES "escritor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seguir_usuario" ADD CONSTRAINT "seguir_usuario_escritorSeguidoId_fkey" FOREIGN KEY ("escritorSeguidoId") REFERENCES "escritor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seguir_usuario" ADD CONSTRAINT "seguir_usuario_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificacion" ADD CONSTRAINT "notificacion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
