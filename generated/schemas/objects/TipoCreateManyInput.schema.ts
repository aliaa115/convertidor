import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const TipoCreateManyInputObjectSchema: z.ZodType<Prisma.TipoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoCreateManyInput>;
export const TipoCreateManyInputObjectZodSchema = makeSchema();
