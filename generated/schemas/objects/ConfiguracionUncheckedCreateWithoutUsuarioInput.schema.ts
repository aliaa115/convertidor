import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			valor: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			tipoId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConfiguracionUncheckedCreateWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUncheckedCreateWithoutUsuarioInput>;
export const ConfiguracionUncheckedCreateWithoutUsuarioInputObjectZodSchema =
	makeSchema();
