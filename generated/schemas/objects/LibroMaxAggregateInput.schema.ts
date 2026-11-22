import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			titulo: z.literal(true).optional(),
			resumen: z.literal(true).optional(),
			portada: z.literal(true).optional(),
			publicado: z.literal(true).optional(),
			fechaPublicacion: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			tipoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			idiomaId: z.literal(true).optional(),
		})
		.strict();
export const LibroMaxAggregateInputObjectSchema: z.ZodType<Prisma.LibroMaxAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroMaxAggregateInputType>;
export const LibroMaxAggregateInputObjectZodSchema = makeSchema();
