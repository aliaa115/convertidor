import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			tabla: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const TipoCountAggregateInputObjectSchema: z.ZodType<Prisma.TipoCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCountAggregateInputType>;
export const TipoCountAggregateInputObjectZodSchema = makeSchema();
