import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { FavoritoCreateManyInputObjectSchema as FavoritoCreateManyInputObjectSchema } from "./objects/FavoritoCreateManyInput.schema.ts";

export const FavoritoCreateManySchema: z.ZodType<Prisma.FavoritoCreateManyArgs> =
	z
		.object({
			data: z.union([
				FavoritoCreateManyInputObjectSchema,
				z.array(FavoritoCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.FavoritoCreateManyArgs>;

export const FavoritoCreateManyZodSchema = z
	.object({
		data: z.union([
			FavoritoCreateManyInputObjectSchema,
			z.array(FavoritoCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
