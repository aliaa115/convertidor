import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

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
			estadoId: z.number().int().optional(),
		})
		.strict();
export const MarcadorCreateManyInputObjectSchema: z.ZodType<Prisma.MarcadorCreateManyInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateManyInput>;
export const MarcadorCreateManyInputObjectZodSchema = makeSchema();
