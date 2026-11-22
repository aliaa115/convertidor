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
			estadoId: z.number().int().optional(),
		})
		.strict();
export const NotaAutorCreateManyCapituloInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateManyCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateManyCapituloInput>;
export const NotaAutorCreateManyCapituloInputObjectZodSchema = makeSchema();
