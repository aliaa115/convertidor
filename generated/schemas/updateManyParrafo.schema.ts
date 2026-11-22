import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoUpdateManyMutationInputObjectSchema as ParrafoUpdateManyMutationInputObjectSchema } from "./objects/ParrafoUpdateManyMutationInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./objects/ParrafoWhereInput.schema.ts";

export const ParrafoUpdateManySchema: z.ZodType<Prisma.ParrafoUpdateManyArgs> =
	z
		.object({
			data: ParrafoUpdateManyMutationInputObjectSchema,
			where: ParrafoWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ParrafoUpdateManyArgs>;

export const ParrafoUpdateManyZodSchema = z
	.object({
		data: ParrafoUpdateManyMutationInputObjectSchema,
		where: ParrafoWhereInputObjectSchema.optional(),
	})
	.strict();
