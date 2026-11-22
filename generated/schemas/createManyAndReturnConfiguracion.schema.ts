import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionCreateManyInputObjectSchema as ConfiguracionCreateManyInputObjectSchema } from "./objects/ConfiguracionCreateManyInput.schema.ts";
import { ConfiguracionSelectObjectSchema as ConfiguracionSelectObjectSchema } from "./objects/ConfiguracionSelect.schema.ts";

export const ConfiguracionCreateManyAndReturnSchema: z.ZodType<Prisma.ConfiguracionCreateManyAndReturnArgs> =
	z
		.object({
			select: ConfiguracionSelectObjectSchema.optional(),
			data: z.union([
				ConfiguracionCreateManyInputObjectSchema,
				z.array(ConfiguracionCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionCreateManyAndReturnArgs>;

export const ConfiguracionCreateManyAndReturnZodSchema = z
	.object({
		select: ConfiguracionSelectObjectSchema.optional(),
		data: z.union([
			ConfiguracionCreateManyInputObjectSchema,
			z.array(ConfiguracionCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
