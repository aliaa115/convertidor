import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			color: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			parrafoId: z.number().int(),
		})
		.strict();
export const MarcadorUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.MarcadorUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUncheckedCreateWithoutEstadoInput>;
export const MarcadorUncheckedCreateWithoutEstadoInputObjectZodSchema = makeSchema();
