import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { LibroEtiquetaOrderByRelationAggregateInputObjectSchema as LibroEtiquetaOrderByRelationAggregateInputObjectSchema } from "./LibroEtiquetaOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
			libros: z.lazy(() => LibroEtiquetaOrderByRelationAggregateInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EtiquetaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaOrderByWithRelationInput>;
export const EtiquetaOrderByWithRelationInputObjectZodSchema = makeSchema();
