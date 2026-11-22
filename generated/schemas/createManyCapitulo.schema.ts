import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CapituloCreateManyInputObjectSchema as CapituloCreateManyInputObjectSchema } from "./objects/CapituloCreateManyInput.schema.ts";

export const CapituloCreateManySchema: z.ZodType<Prisma.CapituloCreateManyArgs> =
	z
		.object({
			data: z.union([
				CapituloCreateManyInputObjectSchema,
				z.array(CapituloCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.CapituloCreateManyArgs>;

export const CapituloCreateManyZodSchema = z
	.object({
		data: z.union([
			CapituloCreateManyInputObjectSchema,
			z.array(CapituloCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
