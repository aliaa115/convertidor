import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { ComentarioOrderByRelationAggregateInputObjectSchema as ComentarioOrderByRelationAggregateInputObjectSchema } from "./ComentarioOrderByRelationAggregateInput.schema.ts";
import { ConfiguracionOrderByRelationAggregateInputObjectSchema as ConfiguracionOrderByRelationAggregateInputObjectSchema } from "./ConfiguracionOrderByRelationAggregateInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { LibroOrderByRelationAggregateInputObjectSchema as LibroOrderByRelationAggregateInputObjectSchema } from "./LibroOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			tabla: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			estadoId: SortOrderSchema.optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
			configuraciones: z
				.lazy(() => ConfiguracionOrderByRelationAggregateInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroOrderByRelationAggregateInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const TipoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TipoOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoOrderByWithRelationInput>;
export const TipoOrderByWithRelationInputObjectZodSchema = makeSchema();
