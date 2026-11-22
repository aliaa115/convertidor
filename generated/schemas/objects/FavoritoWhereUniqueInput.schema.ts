import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const FavoritoWhereUniqueInputObjectSchema: z.ZodType<Prisma.FavoritoWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoWhereUniqueInput>;
export const FavoritoWhereUniqueInputObjectZodSchema = makeSchema();
