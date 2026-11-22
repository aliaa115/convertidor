import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			texto: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			capituloId: z.number().int(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const NotaAutorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.NotaAutorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUncheckedCreateInput>;
export const NotaAutorUncheckedCreateInputObjectZodSchema = makeSchema();
