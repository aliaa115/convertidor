import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			siglas: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict();
export const IdiomaCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaCreateManyEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateManyEstadoInput>;
export const IdiomaCreateManyEstadoInputObjectZodSchema = makeSchema();
