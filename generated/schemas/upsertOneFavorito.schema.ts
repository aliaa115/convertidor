import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { FavoritoCreateInputObjectSchema as FavoritoCreateInputObjectSchema } from "./objects/FavoritoCreateInput.schema.ts";
import { FavoritoIncludeObjectSchema as FavoritoIncludeObjectSchema } from "./objects/FavoritoInclude.schema.ts";
import { FavoritoSelectObjectSchema as FavoritoSelectObjectSchema } from "./objects/FavoritoSelect.schema.ts";
import { FavoritoUncheckedCreateInputObjectSchema as FavoritoUncheckedCreateInputObjectSchema } from "./objects/FavoritoUncheckedCreateInput.schema.ts";
import { FavoritoUncheckedUpdateInputObjectSchema as FavoritoUncheckedUpdateInputObjectSchema } from "./objects/FavoritoUncheckedUpdateInput.schema.ts";
import { FavoritoUpdateInputObjectSchema as FavoritoUpdateInputObjectSchema } from "./objects/FavoritoUpdateInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./objects/FavoritoWhereUniqueInput.schema.ts";

export const FavoritoUpsertOneSchema: z.ZodType<Prisma.FavoritoUpsertArgs> = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		include: FavoritoIncludeObjectSchema.optional(),
		where: FavoritoWhereUniqueInputObjectSchema,
		create: z.union([
			FavoritoCreateInputObjectSchema,
			FavoritoUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			FavoritoUpdateInputObjectSchema,
			FavoritoUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoUpsertArgs>;

export const FavoritoUpsertOneZodSchema = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		include: FavoritoIncludeObjectSchema.optional(),
		where: FavoritoWhereUniqueInputObjectSchema,
		create: z.union([
			FavoritoCreateInputObjectSchema,
			FavoritoUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			FavoritoUpdateInputObjectSchema,
			FavoritoUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict();
