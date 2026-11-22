import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { LibroOrderByWithRelationInputObjectSchema as LibroOrderByWithRelationInputObjectSchema } from "./LibroOrderByWithRelationInput.schema.ts";
import { NotaAutorOrderByRelationAggregateInputObjectSchema as NotaAutorOrderByRelationAggregateInputObjectSchema } from "./NotaAutorOrderByRelationAggregateInput.schema.ts";
import { ParrafoOrderByRelationAggregateInputObjectSchema as ParrafoOrderByRelationAggregateInputObjectSchema } from "./ParrafoOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			indice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			libro: z.lazy(() => LibroOrderByWithRelationInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
			parrafos: z.lazy(() => ParrafoOrderByRelationAggregateInputObjectSchema).optional(),
			notasAutor: z.lazy(() => NotaAutorOrderByRelationAggregateInputObjectSchema).optional(),
		})
		.strict();
export const CapituloOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CapituloOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloOrderByWithRelationInput>;
export const CapituloOrderByWithRelationInputObjectZodSchema = makeSchema();
