import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { FavoritoIncludeObjectSchema as FavoritoIncludeObjectSchema } from "./objects/FavoritoInclude.schema.ts";
import { FavoritoSelectObjectSchema as FavoritoSelectObjectSchema } from "./objects/FavoritoSelect.schema.ts";
import { FavoritoUncheckedUpdateInputObjectSchema as FavoritoUncheckedUpdateInputObjectSchema } from "./objects/FavoritoUncheckedUpdateInput.schema.ts";
import { FavoritoUpdateInputObjectSchema as FavoritoUpdateInputObjectSchema } from "./objects/FavoritoUpdateInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./objects/FavoritoWhereUniqueInput.schema.ts";

export const FavoritoUpdateOneSchema: z.ZodType<Prisma.FavoritoUpdateArgs> = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		include: FavoritoIncludeObjectSchema.optional(),
		data: z.union([FavoritoUpdateInputObjectSchema, FavoritoUncheckedUpdateInputObjectSchema]),
		where: FavoritoWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoUpdateArgs>;

export const FavoritoUpdateOneZodSchema = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		include: FavoritoIncludeObjectSchema.optional(),
		data: z.union([FavoritoUpdateInputObjectSchema, FavoritoUncheckedUpdateInputObjectSchema]),
		where: FavoritoWhereUniqueInputObjectSchema,
	})
	.strict();
