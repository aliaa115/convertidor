import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EscritorSelectObjectSchema as EscritorSelectObjectSchema } from "./objects/EscritorSelect.schema.ts";
import { EscritorUpdateManyMutationInputObjectSchema as EscritorUpdateManyMutationInputObjectSchema } from "./objects/EscritorUpdateManyMutationInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./objects/EscritorWhereInput.schema.ts";

export const EscritorUpdateManyAndReturnSchema: z.ZodType<Prisma.EscritorUpdateManyAndReturnArgs> =
	z
		.object({
			select: EscritorSelectObjectSchema.optional(),
			data: EscritorUpdateManyMutationInputObjectSchema,
			where: EscritorWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EscritorUpdateManyAndReturnArgs>;

export const EscritorUpdateManyAndReturnZodSchema = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		data: EscritorUpdateManyMutationInputObjectSchema,
		where: EscritorWhereInputObjectSchema.optional(),
	})
	.strict();
