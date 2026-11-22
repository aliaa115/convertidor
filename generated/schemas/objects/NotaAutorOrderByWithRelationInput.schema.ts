import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { CapituloOrderByWithRelationInputObjectSchema as CapituloOrderByWithRelationInputObjectSchema } from "./CapituloOrderByWithRelationInput.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./EscritorOrderByWithRelationInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			texto: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			escritor: z.lazy(() => EscritorOrderByWithRelationInputObjectSchema).optional(),
			capitulo: z.lazy(() => CapituloOrderByWithRelationInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
		})
		.strict();
export const NotaAutorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NotaAutorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorOrderByWithRelationInput>;
export const NotaAutorOrderByWithRelationInputObjectZodSchema = makeSchema();
