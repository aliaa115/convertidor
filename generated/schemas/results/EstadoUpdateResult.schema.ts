import * as z from "zod";
import { CapituloSchema } from "../models/Capitulo.schema.ts";
import { CategoriaSchema } from "../models/Categoria.schema.ts";
import { ComentarioSchema } from "../models/Comentario.schema.ts";
import { ConfiguracionSchema } from "../models/Configuracion.schema.ts";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EtiquetaSchema } from "../models/Etiqueta.schema.ts";
import { FavoritoSchema } from "../models/Favorito.schema.ts";
import { GlosarioSchema } from "../models/Glosario.schema.ts";
import { IdiomaSchema } from "../models/Idioma.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
import { LibroCategoriaSchema } from "../models/LibroCategoria.schema.ts";
import { LibroEtiquetaSchema } from "../models/LibroEtiqueta.schema.ts";
import { ListaSchema } from "../models/Lista.schema.ts";
import { ListaLibroSchema } from "../models/ListaLibro.schema.ts";
import { MarcadorSchema } from "../models/Marcador.schema.ts";
import { NotaAutorSchema } from "../models/NotaAutor.schema.ts";
import { ParrafoSchema } from "../models/Parrafo.schema.ts";
import { SeguirUsuarioSchema } from "../models/SeguirUsuario.schema.ts";
import { TipoSchema } from "../models/Tipo.schema.ts";
import { UsuarioSchema } from "../models/Usuario.schema.ts";
export const EstadoUpdateResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string(),
		color: z.string().optional(),
		icon: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		categorias: z.array(CategoriaSchema).optional(),
		etiquetas: z.array(EtiquetaSchema).optional(),
		tipos: z.array(TipoSchema).optional(),
		usuarios: z.array(UsuarioSchema).optional(),
		escritores: z.array(EscritorSchema).optional(),
		configuraciones: z.array(ConfiguracionSchema).optional(),
		idioma: z.array(IdiomaSchema).optional(),
		libros: z.array(LibroSchema).optional(),
		capitulos: z.array(CapituloSchema).optional(),
		parrafos: z.array(ParrafoSchema).optional(),
		comentarios: z.array(ComentarioSchema).optional(),
		libroCategorias: z.array(LibroCategoriaSchema).optional(),
		libroEtiquetas: z.array(LibroEtiquetaSchema).optional(),
		favoritos: z.array(FavoritoSchema).optional(),
		glosarios: z.array(GlosarioSchema).optional(),
		notasAutor: z.array(NotaAutorSchema).optional(),
		marcadores: z.array(MarcadorSchema).optional(),
		listas: z.array(ListaSchema).optional(),
		listaLibros: z.array(ListaLibroSchema).optional(),
		seguirUsuarios: z.array(SeguirUsuarioSchema).optional(),
	}),
);
