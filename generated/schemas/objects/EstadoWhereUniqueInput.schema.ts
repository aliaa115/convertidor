import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const EstadoWhereUniqueInputObjectSchema: z.ZodType<Prisma.EstadoWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoWhereUniqueInput>;
export const EstadoWhereUniqueInputObjectZodSchema = makeSchema();
