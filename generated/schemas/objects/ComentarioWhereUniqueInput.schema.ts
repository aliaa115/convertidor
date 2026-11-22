import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const ComentarioWhereUniqueInputObjectSchema: z.ZodType<Prisma.ComentarioWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioWhereUniqueInput>;
export const ComentarioWhereUniqueInputObjectZodSchema = makeSchema();
