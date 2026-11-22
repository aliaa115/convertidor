import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { EtiquetaOrderByWithRelationInputObjectSchema as EtiquetaOrderByWithRelationInputObjectSchema } from "./EtiquetaOrderByWithRelationInput.schema.ts";
import { LibroOrderByWithRelationInputObjectSchema as LibroOrderByWithRelationInputObjectSchema } from "./LibroOrderByWithRelationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			etiquetaId: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
			libro: z.lazy(() => LibroOrderByWithRelationInputObjectSchema).optional(),
			etiqueta: z.lazy(() => EtiquetaOrderByWithRelationInputObjectSchema).optional(),
		})
		.strict();
export const LibroEtiquetaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaOrderByWithRelationInput>;
export const LibroEtiquetaOrderByWithRelationInputObjectZodSchema = makeSchema();
