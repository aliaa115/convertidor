import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionSelectObjectSchema as ConfiguracionSelectObjectSchema } from "./objects/ConfiguracionSelect.schema.ts";
import { ConfiguracionUpdateManyMutationInputObjectSchema as ConfiguracionUpdateManyMutationInputObjectSchema } from "./objects/ConfiguracionUpdateManyMutationInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./objects/ConfiguracionWhereInput.schema.ts";

export const ConfiguracionUpdateManyAndReturnSchema: z.ZodType<Prisma.ConfiguracionUpdateManyAndReturnArgs> =
	z
		.object({
			select: ConfiguracionSelectObjectSchema.optional(),
			data: ConfiguracionUpdateManyMutationInputObjectSchema,
			where: ConfiguracionWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionUpdateManyAndReturnArgs>;

export const ConfiguracionUpdateManyAndReturnZodSchema = z
	.object({
		select: ConfiguracionSelectObjectSchema.optional(),
		data: ConfiguracionUpdateManyMutationInputObjectSchema,
		where: ConfiguracionWhereInputObjectSchema.optional(),
	})
	.strict();
