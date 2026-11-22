import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
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
			siglas: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroOrderByRelationAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const IdiomaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.IdiomaOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaOrderByWithRelationInput>;
export const IdiomaOrderByWithRelationInputObjectZodSchema = makeSchema();
