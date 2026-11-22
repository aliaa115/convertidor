import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombres: z.literal(true).optional(),
			apellidos: z.literal(true).optional(),
			alias: z.literal(true).optional(),
			descripcion: z.literal(true).optional(),
			fechaNacimiento: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			avatarId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const EscritorCountAggregateInputObjectSchema: z.ZodType<Prisma.EscritorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EscritorCountAggregateInputType>;
export const EscritorCountAggregateInputObjectZodSchema = makeSchema();
