import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			valor: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			usuarioId: z.number().int().optional().nullable(),
			tipoId: z.number().int().optional().nullable(),
		})
		.strict();
export const ConfiguracionCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateManyEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateManyEstadoInput>;
export const ConfiguracionCreateManyEstadoInputObjectZodSchema = makeSchema();
