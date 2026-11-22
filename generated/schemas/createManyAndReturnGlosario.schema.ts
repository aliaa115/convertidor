import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { GlosarioCreateManyInputObjectSchema as GlosarioCreateManyInputObjectSchema } from "./objects/GlosarioCreateManyInput.schema.ts";
import { GlosarioSelectObjectSchema as GlosarioSelectObjectSchema } from "./objects/GlosarioSelect.schema.ts";

export const GlosarioCreateManyAndReturnSchema: z.ZodType<Prisma.GlosarioCreateManyAndReturnArgs> =
	z
		.object({
			select: GlosarioSelectObjectSchema.optional(),
			data: z.union([
				GlosarioCreateManyInputObjectSchema,
				z.array(GlosarioCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.GlosarioCreateManyAndReturnArgs>;

export const GlosarioCreateManyAndReturnZodSchema = z
	.object({
		select: GlosarioSelectObjectSchema.optional(),
		data: z.union([
			GlosarioCreateManyInputObjectSchema,
			z.array(GlosarioCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
