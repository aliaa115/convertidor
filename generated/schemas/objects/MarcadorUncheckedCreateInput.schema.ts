import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			color: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			parrafoId: z.number().int(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const MarcadorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MarcadorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorUncheckedCreateInput>;
export const MarcadorUncheckedCreateInputObjectZodSchema = makeSchema();
