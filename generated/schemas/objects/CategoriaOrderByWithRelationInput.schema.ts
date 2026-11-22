import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { LibroCategoriaOrderByRelationAggregateInputObjectSchema as LibroCategoriaOrderByRelationAggregateInputObjectSchema } from "./LibroCategoriaOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroCategoriaOrderByRelationAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const CategoriaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CategoriaOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaOrderByWithRelationInput>;
export const CategoriaOrderByWithRelationInputObjectZodSchema = makeSchema();
