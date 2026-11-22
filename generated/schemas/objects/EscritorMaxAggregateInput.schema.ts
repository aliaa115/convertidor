import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

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
		})
		.strict();
export const EscritorMaxAggregateInputObjectSchema: z.ZodType<Prisma.EscritorMaxAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorMaxAggregateInputType>;
export const EscritorMaxAggregateInputObjectZodSchema = makeSchema();
