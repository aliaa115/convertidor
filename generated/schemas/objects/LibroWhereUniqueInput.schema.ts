import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const LibroWhereUniqueInputObjectSchema: z.ZodType<Prisma.LibroWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroWhereUniqueInput>;
export const LibroWhereUniqueInputObjectZodSchema = makeSchema();
