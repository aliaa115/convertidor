import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			valor: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			usuarioId: z.number().int().optional().nullable(),
			tipoId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ConfiguracionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ConfiguracionUncheckedCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUncheckedCreateInput>;
export const ConfiguracionUncheckedCreateInputObjectZodSchema = makeSchema();
