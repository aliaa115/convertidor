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
			estadoId: z.number().int().optional(),
		})
		.strict();
export const MarcadorCreateManyParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorCreateManyParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateManyParrafoInput>;
export const MarcadorCreateManyParrafoInputObjectZodSchema = makeSchema();
