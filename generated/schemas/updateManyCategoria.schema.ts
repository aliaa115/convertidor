import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaUpdateManyMutationInputObjectSchema as CategoriaUpdateManyMutationInputObjectSchema } from "./objects/CategoriaUpdateManyMutationInput.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./objects/CategoriaWhereInput.schema.ts";

export const CategoriaUpdateManySchema: z.ZodType<Prisma.CategoriaUpdateManyArgs> =
	z
		.object({
			data: CategoriaUpdateManyMutationInputObjectSchema,
			where: CategoriaWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.CategoriaUpdateManyArgs>;

export const CategoriaUpdateManyZodSchema = z
	.object({
		data: CategoriaUpdateManyMutationInputObjectSchema,
		where: CategoriaWhereInputObjectSchema.optional(),
	})
	.strict();
