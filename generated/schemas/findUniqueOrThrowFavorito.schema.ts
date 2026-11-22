import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { FavoritoIncludeObjectSchema as FavoritoIncludeObjectSchema } from "./objects/FavoritoInclude.schema.ts";
import { FavoritoSelectObjectSchema as FavoritoSelectObjectSchema } from "./objects/FavoritoSelect.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./objects/FavoritoWhereUniqueInput.schema.ts";

export const FavoritoFindUniqueOrThrowSchema: z.ZodType<Prisma.FavoritoFindUniqueOrThrowArgs> =
	z
		.object({
			select: FavoritoSelectObjectSchema.optional(),
			include: FavoritoIncludeObjectSchema.optional(),
			where: FavoritoWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.FavoritoFindUniqueOrThrowArgs>;

export const FavoritoFindUniqueOrThrowZodSchema = z
	.object({
		select: FavoritoSelectObjectSchema.optional(),
		include: FavoritoIncludeObjectSchema.optional(),
		where: FavoritoWhereUniqueInputObjectSchema,
	})
	.strict();
