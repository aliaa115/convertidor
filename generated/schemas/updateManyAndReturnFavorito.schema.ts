import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { FavoritoSelectObjectSchema as FavoritoSelectObjectSchema } from "./objects/FavoritoSelect.schema.ts";
import { FavoritoUpdateManyMutationInputObjectSchema as FavoritoUpdateManyMutationInputObjectSchema } from "./objects/FavoritoUpdateManyMutationInput.schema.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./objects/FavoritoWhereInput.schema.ts";

export const FavoritoUpdateManyAndReturnSchema: z.ZodType<Prisma.FavoritoUpdateManyAndReturnArgs> =
	z
		.object({
			select: FavoritoSelectObjectSchema.optional(),
			data: FavoritoUpdateManyMutationInputObjectSchema,
			where: FavoritoWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.FavoritoUpdateManyAndReturnArgs>;

export const FavoritoUpdateManyAndReturnZodSchema = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		data: FavoritoUpdateManyMutationInputObjectSchema,
		where: FavoritoWhereInputObjectSchema.optional(),
	})
	.strict();
