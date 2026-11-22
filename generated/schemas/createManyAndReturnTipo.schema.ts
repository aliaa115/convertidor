import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { TipoCreateManyInputObjectSchema as TipoCreateManyInputObjectSchema } from "./objects/TipoCreateManyInput.schema.ts";
import { TipoSelectObjectSchema as TipoSelectObjectSchema } from "./objects/TipoSelect.schema.ts";

export const TipoCreateManyAndReturnSchema: z.ZodType<Prisma.TipoCreateManyAndReturnArgs> =
	z
		.object({
			select: TipoSelectObjectSchema.optional(),
			data: z.union([
				TipoCreateManyInputObjectSchema,
				z.array(TipoCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.TipoCreateManyAndReturnArgs>;

export const TipoCreateManyAndReturnZodSchema = z
	.object({
		select: TipoSelectObjectSchema.optional(),
		data: z.union([
			TipoCreateManyInputObjectSchema,
			z.array(TipoCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
