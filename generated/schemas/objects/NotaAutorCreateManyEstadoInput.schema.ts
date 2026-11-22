import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			texto: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			capituloId: z.number().int(),
		})
		.strict();
export const NotaAutorCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateManyEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateManyEstadoInput>;
export const NotaAutorCreateManyEstadoInputObjectZodSchema = makeSchema();
