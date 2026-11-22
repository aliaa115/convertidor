import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CapituloCreateManyInputObjectSchema as CapituloCreateManyInputObjectSchema } from "./objects/CapituloCreateManyInput.schema.ts";
import { CapituloSelectObjectSchema as CapituloSelectObjectSchema } from "./objects/CapituloSelect.schema.ts";

export const CapituloCreateManyAndReturnSchema: z.ZodType<Prisma.CapituloCreateManyAndReturnArgs> =
	z
		.object({
			select: CapituloSelectObjectSchema.optional(),
			data: z.union([
				CapituloCreateManyInputObjectSchema,
				z.array(CapituloCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.CapituloCreateManyAndReturnArgs>;

export const CapituloCreateManyAndReturnZodSchema = z
	.object({
		select: CapituloSelectObjectSchema.optional(),
		data: z.union([
			CapituloCreateManyInputObjectSchema,
			z.array(CapituloCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
