import * as z from "zod";
import { CapituloSchema } from "../models/Capitulo.schema.ts";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { FavoritoSchema } from "../models/Favorito.schema.ts";
import { GlosarioSchema } from "../models/Glosario.schema.ts";
import { IdiomaSchema } from "../models/Idioma.schema.ts";
import { LibroCategoriaSchema } from "../models/LibroCategoria.schema.ts";
import { LibroEtiquetaSchema } from "../models/LibroEtiqueta.schema.ts";
import { ListaLibroSchema } from "../models/ListaLibro.schema.ts";
import { TipoSchema } from "../models/Tipo.schema.ts";
export const LibroFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		titulo: z.string(),
		resumen: z.string(),
		portada: z.string().optional(),
		publicado: z.boolean(),
		fechaPublicacion: z.date().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: EscritorSchema.optional(),
		tipoId: z.number().int(),
		tipo: TipoSchema.optional(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
		idiomaId: z.number().int(),
		idioma: IdiomaSchema.optional(),
		capitulos: z.array(CapituloSchema).optional(),
		categorias: z.array(LibroCategoriaSchema).optional(),
		etiquetas: z.array(LibroEtiquetaSchema).optional(),
		favoritos: z.array(FavoritoSchema).optional(),
		glosarios: z.array(GlosarioSchema).optional(),
		listaLibros: z.array(ListaLibroSchema).optional(),
	}),
);
