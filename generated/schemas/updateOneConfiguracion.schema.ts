import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionIncludeObjectSchema as ConfiguracionIncludeObjectSchema } from "./objects/ConfiguracionInclude.schema.ts";
import { ConfiguracionSelectObjectSchema as ConfiguracionSelectObjectSchema } from "./objects/ConfiguracionSelect.schema.ts";
import { ConfiguracionUncheckedUpdateInputObjectSchema as ConfiguracionUncheckedUpdateInputObjectSchema } from "./objects/ConfiguracionUncheckedUpdateInput.schema.ts";
import { ConfiguracionUpdateInputObjectSchema as ConfiguracionUpdateInputObjectSchema } from "./objects/ConfiguracionUpdateInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./objects/ConfiguracionWhereUniqueInput.schema.ts";

export const ConfiguracionUpdateOneSchema: z.ZodType<Prisma.ConfiguracionUpdateArgs> =
	z
		.object({
			select: ConfiguracionSelectObjectSchema.optional(),
			include: ConfiguracionIncludeObjectSchema.optional(),
			data: z.union([
				ConfiguracionUpdateInputObjectSchema,
				ConfiguracionUncheckedUpdateInputObjectSchema,
			]),
			where: ConfiguracionWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionUpdateArgs>;

export const ConfiguracionUpdateOneZodSchema = z
	.object({
		select: ConfiguracionSelectObjectSchema.optional(),
		include: ConfiguracionIncludeObjectSchema.optional(),
		data: z.union([
			ConfiguracionUpdateInputObjectSchema,
			ConfiguracionUncheckedUpdateInputObjectSchema,
		]),
		where: ConfiguracionWhereUniqueInputObjectSchema,
	})
	.strict();
