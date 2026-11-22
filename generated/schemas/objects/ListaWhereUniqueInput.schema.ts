import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const ListaWhereUniqueInputObjectSchema: z.ZodType<Prisma.ListaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaWhereUniqueInput>;
export const ListaWhereUniqueInputObjectZodSchema = makeSchema();
