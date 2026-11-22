import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./objects/FavoritoWhereInput.schema.ts";

export const FavoritoDeleteManySchema: z.ZodType<Prisma.FavoritoDeleteManyArgs> = z
	.object({ where: FavoritoWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.FavoritoDeleteManyArgs>;

export const FavoritoDeleteManyZodSchema = z.object({ where: FavoritoWhereInputObjectSchema.optional() }).strict();
