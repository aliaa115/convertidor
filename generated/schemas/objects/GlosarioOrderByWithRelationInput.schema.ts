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
			palabra: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			significado: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			libro: z.lazy(() => LibroOrderByWithRelationInputObjectSchema).optional(),
			escritor: z.lazy(() => EscritorOrderByWithRelationInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
		})
		.strict();
export const GlosarioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GlosarioOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioOrderByWithRelationInput>;
export const GlosarioOrderByWithRelationInputObjectZodSchema = makeSchema();
