import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

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
export const NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.NotaAutorUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUncheckedCreateWithoutEstadoInput>;
export const NotaAutorUncheckedCreateWithoutEstadoInputObjectZodSchema = makeSchema();
