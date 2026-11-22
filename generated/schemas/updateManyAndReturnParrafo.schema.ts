import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoSelectObjectSchema as ParrafoSelectObjectSchema } from "./objects/ParrafoSelect.schema.ts";
import { ParrafoUpdateManyMutationInputObjectSchema as ParrafoUpdateManyMutationInputObjectSchema } from "./objects/ParrafoUpdateManyMutationInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./objects/ParrafoWhereInput.schema.ts";

export const ParrafoUpdateManyAndReturnSchema: z.ZodType<Prisma.ParrafoUpdateManyAndReturnArgs> =
	z
		.object({
			select: ParrafoSelectObjectSchema.optional(),
			data: ParrafoUpdateManyMutationInputObjectSchema,
			where: ParrafoWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ParrafoUpdateManyAndReturnArgs>;

export const ParrafoUpdateManyAndReturnZodSchema = z
	.object({
		select: ParrafoSelectObjectSchema.optional(),
		data: ParrafoUpdateManyMutationInputObjectSchema,
		where: ParrafoWhereInputObjectSchema.optional(),
	})
	.strict();
