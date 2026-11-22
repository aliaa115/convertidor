import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./EscritorOrderByWithRelationInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { LibroOrderByWithRelationInputObjectSchema as LibroOrderByWithRelationInputObjectSchema } from "./LibroOrderByWithRelationInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			libroId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			estadoId: SortOrderSchema.optional(),
			escritor: z.lazy(() => EscritorOrderByWithRelationInputObjectSchema).optional(),
			libro: z.lazy(() => LibroOrderByWithRelationInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
		})
		.strict();
export const FavoritoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FavoritoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoOrderByWithRelationInput>;
export const FavoritoOrderByWithRelationInputObjectZodSchema = makeSchema();
