import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			palabra: z.string().optional().nullable(),
			significado: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libroId: z.number().int(),
			escritorId: z.number().int(),
		})
		.strict();
export const GlosarioCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.GlosarioCreateManyEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateManyEstadoInput>;
export const GlosarioCreateManyEstadoInputObjectZodSchema = makeSchema();
