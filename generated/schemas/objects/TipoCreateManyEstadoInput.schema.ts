import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
		})
		.strict();
export const TipoCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.TipoCreateManyEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoCreateManyEstadoInput>;
export const TipoCreateManyEstadoInputObjectZodSchema = makeSchema();
