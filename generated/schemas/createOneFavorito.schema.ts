import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { FavoritoCreateInputObjectSchema as FavoritoCreateInputObjectSchema } from "./objects/FavoritoCreateInput.schema.ts";
import { FavoritoIncludeObjectSchema as FavoritoIncludeObjectSchema } from "./objects/FavoritoInclude.schema.ts";
import { FavoritoSelectObjectSchema as FavoritoSelectObjectSchema } from "./objects/FavoritoSelect.schema.ts";
import { FavoritoUncheckedCreateInputObjectSchema as FavoritoUncheckedCreateInputObjectSchema } from "./objects/FavoritoUncheckedCreateInput.schema.ts";

export const FavoritoCreateOneSchema: z.ZodType<Prisma.FavoritoCreateArgs> = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		include: FavoritoIncludeObjectSchema.optional(),
		data: z.union([FavoritoCreateInputObjectSchema, FavoritoUncheckedCreateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoCreateArgs>;

export const FavoritoCreateOneZodSchema = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		include: FavoritoIncludeObjectSchema.optional(),
		data: z.union([FavoritoCreateInputObjectSchema, FavoritoUncheckedCreateInputObjectSchema]),
	})
	.strict();
