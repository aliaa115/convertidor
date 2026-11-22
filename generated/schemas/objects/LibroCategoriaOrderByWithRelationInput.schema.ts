import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { CategoriaOrderByWithRelationInputObjectSchema as CategoriaOrderByWithRelationInputObjectSchema } from "./CategoriaOrderByWithRelationInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { LibroOrderByWithRelationInputObjectSchema as LibroOrderByWithRelationInputObjectSchema } from "./LibroOrderByWithRelationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			categoriaId: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
			libro: z.lazy(() => LibroOrderByWithRelationInputObjectSchema).optional(),
			categoria: z
				.lazy(() => CategoriaOrderByWithRelationInputObjectSchema)
				.optional(),
		})
		.strict();
export const LibroCategoriaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LibroCategoriaOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaOrderByWithRelationInput>;
export const LibroCategoriaOrderByWithRelationInputObjectZodSchema =
	makeSchema();
