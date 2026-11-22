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
			estadoId: z.number().int().optional(),
		})
		.strict();
export const MarcadorUncheckedCreateWithoutParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorUncheckedCreateWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUncheckedCreateWithoutParrafoInput>;
export const MarcadorUncheckedCreateWithoutParrafoInputObjectZodSchema = makeSchema();
