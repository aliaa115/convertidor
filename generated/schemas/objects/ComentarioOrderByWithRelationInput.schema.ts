import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { ComentarioOrderByRelationAggregateInputObjectSchema as ComentarioOrderByRelationAggregateInputObjectSchema } from "./ComentarioOrderByRelationAggregateInput.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./EscritorOrderByWithRelationInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { ParrafoOrderByWithRelationInputObjectSchema as ParrafoOrderByWithRelationInputObjectSchema } from "./ParrafoOrderByWithRelationInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";
import { TipoOrderByWithRelationInputObjectSchema as TipoOrderByWithRelationInputObjectSchema } from "./TipoOrderByWithRelationInput.schema.ts";

const comentarioorderbywithrelationinputSchema = z
	.object({
		id: SortOrderSchema.optional(),
		contenido: SortOrderSchema.optional(),
		createdAt: SortOrderSchema.optional(),
		updatedAt: SortOrderSchema.optional(),
		escritorId: SortOrderSchema.optional(),
		parrafoId: SortOrderSchema.optional(),
		comentarioPadreId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
		tipoId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
		estadoId: SortOrderSchema.optional(),
		escritor: z.lazy(() => EscritorOrderByWithRelationInputObjectSchema).optional(),
		parrafo: z.lazy(() => ParrafoOrderByWithRelationInputObjectSchema).optional(),
		padre: z.lazy(() => ComentarioOrderByWithRelationInputObjectSchema).optional(),
		respuestas: z.lazy(() => ComentarioOrderByRelationAggregateInputObjectSchema).optional(),
		tipo: z.lazy(() => TipoOrderByWithRelationInputObjectSchema).optional(),
		estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
	})
	.strict();
export const ComentarioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ComentarioOrderByWithRelationInput> =
	comentarioorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.ComentarioOrderByWithRelationInput>;
export const ComentarioOrderByWithRelationInputObjectZodSchema = comentarioorderbywithrelationinputSchema;
