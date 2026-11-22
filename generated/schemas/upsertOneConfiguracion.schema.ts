import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ConfiguracionCreateInputObjectSchema as ConfiguracionCreateInputObjectSchema } from "./objects/ConfiguracionCreateInput.schema.ts";
import { ConfiguracionIncludeObjectSchema as ConfiguracionIncludeObjectSchema } from "./objects/ConfiguracionInclude.schema.ts";
import { ConfiguracionSelectObjectSchema as ConfiguracionSelectObjectSchema } from "./objects/ConfiguracionSelect.schema.ts";
import { ConfiguracionUncheckedCreateInputObjectSchema as ConfiguracionUncheckedCreateInputObjectSchema } from "./objects/ConfiguracionUncheckedCreateInput.schema.ts";
import { ConfiguracionUncheckedUpdateInputObjectSchema as ConfiguracionUncheckedUpdateInputObjectSchema } from "./objects/ConfiguracionUncheckedUpdateInput.schema.ts";
import { ConfiguracionUpdateInputObjectSchema as ConfiguracionUpdateInputObjectSchema } from "./objects/ConfiguracionUpdateInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./objects/ConfiguracionWhereUniqueInput.schema.ts";

export const ConfiguracionUpsertOneSchema: z.ZodType<Prisma.ConfiguracionUpsertArgs> = z
	.object({
		select: ConfiguracionSelectObjectSchema.optional(),
		include: ConfiguracionIncludeObjectSchema.optional(),
		where: ConfiguracionWhereUniqueInputObjectSchema,
		create: z.union([ConfiguracionCreateInputObjectSchema, ConfiguracionUncheckedCreateInputObjectSchema]),
		update: z.union([ConfiguracionUpdateInputObjectSchema, ConfiguracionUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.ConfiguracionUpsertArgs>;

export const ConfiguracionUpsertOneZodSchema = z
	.object({
		select: ConfiguracionSelectObjectSchema.optional(),
		include: ConfiguracionIncludeObjectSchema.optional(),
		where: ConfiguracionWhereUniqueInputObjectSchema,
		create: z.union([ConfiguracionCreateInputObjectSchema, ConfiguracionUncheckedCreateInputObjectSchema]),
		update: z.union([ConfiguracionUpdateInputObjectSchema, ConfiguracionUncheckedUpdateInputObjectSchema]),
	})
	.strict();
