import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			usuarioId: z.number().int().optional(),
		})
		.strict();
export const ConfiguracionWhereUniqueInputObjectSchema: z.ZodType<Prisma.ConfiguracionWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionWhereUniqueInput>;
export const ConfiguracionWhereUniqueInputObjectZodSchema = makeSchema();
