import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoCreateManyInputObjectSchema as ParrafoCreateManyInputObjectSchema } from "./objects/ParrafoCreateManyInput.schema.ts";

export const ParrafoCreateManySchema: z.ZodType<Prisma.ParrafoCreateManyArgs> =
	z
		.object({
			data: z.union([
				ParrafoCreateManyInputObjectSchema,
				z.array(ParrafoCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ParrafoCreateManyArgs>;

export const ParrafoCreateManyZodSchema = z
	.object({
		data: z.union([
			ParrafoCreateManyInputObjectSchema,
			z.array(ParrafoCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
