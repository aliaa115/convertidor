import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionCreateManyInputObjectSchema as ConfiguracionCreateManyInputObjectSchema } from "./objects/ConfiguracionCreateManyInput.schema.ts";

export const ConfiguracionCreateManySchema: z.ZodType<Prisma.ConfiguracionCreateManyArgs> =
	z
		.object({
			data: z.union([
				ConfiguracionCreateManyInputObjectSchema,
				z.array(ConfiguracionCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionCreateManyArgs>;

export const ConfiguracionCreateManyZodSchema = z
	.object({
		data: z.union([
			ConfiguracionCreateManyInputObjectSchema,
			z.array(ConfiguracionCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
