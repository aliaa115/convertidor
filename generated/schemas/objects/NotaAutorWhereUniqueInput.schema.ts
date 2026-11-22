import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const NotaAutorWhereUniqueInputObjectSchema: z.ZodType<Prisma.NotaAutorWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorWhereUniqueInput>;
export const NotaAutorWhereUniqueInputObjectZodSchema = makeSchema();
