import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			texto: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			capituloId: z.number().int(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.NotaAutorUncheckedCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUncheckedCreateWithoutEscritorInput>;
export const NotaAutorUncheckedCreateWithoutEscritorInputObjectZodSchema =
	makeSchema();
