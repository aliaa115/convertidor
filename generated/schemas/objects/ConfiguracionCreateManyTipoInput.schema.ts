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
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ConfiguracionCreateManyTipoInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateManyTipoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateManyTipoInput>;
export const ConfiguracionCreateManyTipoInputObjectZodSchema = makeSchema();
