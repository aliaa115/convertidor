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
			estadoId: z.number().int().optional(),
		})
		.strict();
export const GlosarioCreateManyInputObjectSchema: z.ZodType<Prisma.GlosarioCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateManyInput>;
export const GlosarioCreateManyInputObjectZodSchema = makeSchema();
