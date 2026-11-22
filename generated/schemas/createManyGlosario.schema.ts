import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { GlosarioCreateManyInputObjectSchema as GlosarioCreateManyInputObjectSchema } from "./objects/GlosarioCreateManyInput.schema.ts";

export const GlosarioCreateManySchema: z.ZodType<Prisma.GlosarioCreateManyArgs> =
	z
		.object({
			data: z.union([
				GlosarioCreateManyInputObjectSchema,
				z.array(GlosarioCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.GlosarioCreateManyArgs>;

export const GlosarioCreateManyZodSchema = z
	.object({
		data: z.union([
			GlosarioCreateManyInputObjectSchema,
			z.array(GlosarioCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
