import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string(),
			color: z.string().optional().nullable(),
			icon: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict();
export const EstadoCreateManyInputObjectSchema: z.ZodType<Prisma.EstadoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateManyInput>;
export const EstadoCreateManyInputObjectZodSchema = makeSchema();
