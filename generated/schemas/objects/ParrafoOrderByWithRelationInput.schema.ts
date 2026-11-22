import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { CapituloOrderByWithRelationInputObjectSchema as CapituloOrderByWithRelationInputObjectSchema } from "./CapituloOrderByWithRelationInput.schema.ts";
import { ComentarioOrderByRelationAggregateInputObjectSchema as ComentarioOrderByRelationAggregateInputObjectSchema } from "./ComentarioOrderByRelationAggregateInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { MarcadorOrderByRelationAggregateInputObjectSchema as MarcadorOrderByRelationAggregateInputObjectSchema } from "./MarcadorOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			contenido: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			indice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			capitulo: z.lazy(() => CapituloOrderByWithRelationInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioOrderByRelationAggregateInputObjectSchema).optional(),
			marcadores: z.lazy(() => MarcadorOrderByRelationAggregateInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ParrafoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoOrderByWithRelationInput>;
export const ParrafoOrderByWithRelationInputObjectZodSchema = makeSchema();
