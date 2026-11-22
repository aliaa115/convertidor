import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const ListaLibroWhereUniqueInputObjectSchema: z.ZodType<Prisma.ListaLibroWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroWhereUniqueInput>;
export const ListaLibroWhereUniqueInputObjectZodSchema = makeSchema();
