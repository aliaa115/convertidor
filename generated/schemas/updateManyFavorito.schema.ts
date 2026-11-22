import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { FavoritoUpdateManyMutationInputObjectSchema as FavoritoUpdateManyMutationInputObjectSchema } from "./objects/FavoritoUpdateManyMutationInput.schema.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./objects/FavoritoWhereInput.schema.ts";

export const FavoritoUpdateManySchema: z.ZodType<Prisma.FavoritoUpdateManyArgs> = z
	.object({ data: FavoritoUpdateManyMutationInputObjectSchema, where: FavoritoWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.FavoritoUpdateManyArgs>;

export const FavoritoUpdateManyZodSchema = z.object({ data: FavoritoUpdateManyMutationInputObjectSchema, where: FavoritoWhereInputObjectSchema.optional() }).strict();
