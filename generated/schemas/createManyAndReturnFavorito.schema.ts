import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { FavoritoCreateManyInputObjectSchema as FavoritoCreateManyInputObjectSchema } from "./objects/FavoritoCreateManyInput.schema.ts";
import { FavoritoSelectObjectSchema as FavoritoSelectObjectSchema } from "./objects/FavoritoSelect.schema.ts";

export const FavoritoCreateManyAndReturnSchema: z.ZodType<Prisma.FavoritoCreateManyAndReturnArgs> =
	z
		.object({
			select: FavoritoSelectObjectSchema.optional(),
			data: z.union([
				FavoritoCreateManyInputObjectSchema,
				z.array(FavoritoCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.FavoritoCreateManyAndReturnArgs>;

export const FavoritoCreateManyAndReturnZodSchema = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		data: z.union([
			FavoritoCreateManyInputObjectSchema,
			z.array(FavoritoCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
