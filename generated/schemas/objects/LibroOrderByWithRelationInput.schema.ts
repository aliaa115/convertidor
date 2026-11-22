import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { CapituloOrderByRelationAggregateInputObjectSchema as CapituloOrderByRelationAggregateInputObjectSchema } from "./CapituloOrderByRelationAggregateInput.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./EscritorOrderByWithRelationInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { FavoritoOrderByRelationAggregateInputObjectSchema as FavoritoOrderByRelationAggregateInputObjectSchema } from "./FavoritoOrderByRelationAggregateInput.schema.ts";
import { GlosarioOrderByRelationAggregateInputObjectSchema as GlosarioOrderByRelationAggregateInputObjectSchema } from "./GlosarioOrderByRelationAggregateInput.schema.ts";
import { IdiomaOrderByWithRelationInputObjectSchema as IdiomaOrderByWithRelationInputObjectSchema } from "./IdiomaOrderByWithRelationInput.schema.ts";
import { LibroCategoriaOrderByRelationAggregateInputObjectSchema as LibroCategoriaOrderByRelationAggregateInputObjectSchema } from "./LibroCategoriaOrderByRelationAggregateInput.schema.ts";
import { LibroEtiquetaOrderByRelationAggregateInputObjectSchema as LibroEtiquetaOrderByRelationAggregateInputObjectSchema } from "./LibroEtiquetaOrderByRelationAggregateInput.schema.ts";
import { ListaLibroOrderByRelationAggregateInputObjectSchema as ListaLibroOrderByRelationAggregateInputObjectSchema } from "./ListaLibroOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";
import { TipoOrderByWithRelationInputObjectSchema as TipoOrderByWithRelationInputObjectSchema } from "./TipoOrderByWithRelationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			titulo: SortOrderSchema.optional(),
			resumen: SortOrderSchema.optional(),
			portada: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			publicado: SortOrderSchema.optional(),
			fechaPublicacion: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			tipoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			idiomaId: SortOrderSchema.optional(),
			escritor: z
				.lazy(() => EscritorOrderByWithRelationInputObjectSchema)
				.optional(),
			tipo: z.lazy(() => TipoOrderByWithRelationInputObjectSchema).optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
			idioma: z
				.lazy(() => IdiomaOrderByWithRelationInputObjectSchema)
				.optional(),
			capitulos: z
				.lazy(() => CapituloOrderByRelationAggregateInputObjectSchema)
				.optional(),
			categorias: z
				.lazy(() => LibroCategoriaOrderByRelationAggregateInputObjectSchema)
				.optional(),
			etiquetas: z
				.lazy(() => LibroEtiquetaOrderByRelationAggregateInputObjectSchema)
				.optional(),
			favoritos: z
				.lazy(() => FavoritoOrderByRelationAggregateInputObjectSchema)
				.optional(),
			glosarios: z
				.lazy(() => GlosarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
			listaLibros: z
				.lazy(() => ListaLibroOrderByRelationAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const LibroOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LibroOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroOrderByWithRelationInput>;
export const LibroOrderByWithRelationInputObjectZodSchema = makeSchema();
