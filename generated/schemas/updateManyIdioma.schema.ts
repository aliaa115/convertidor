import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaUpdateManyMutationInputObjectSchema as IdiomaUpdateManyMutationInputObjectSchema } from "./objects/IdiomaUpdateManyMutationInput.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./objects/IdiomaWhereInput.schema.ts";

export const IdiomaUpdateManySchema: z.ZodType<Prisma.IdiomaUpdateManyArgs> = z
	.object({
		data: IdiomaUpdateManyMutationInputObjectSchema,
		where: IdiomaWhereInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaUpdateManyArgs>;

export const IdiomaUpdateManyZodSchema = z
	.object({
		data: IdiomaUpdateManyMutationInputObjectSchema,
		where: IdiomaWhereInputObjectSchema.optional(),
	})
	.strict();
