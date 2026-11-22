import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ConfiguracionCreateInputObjectSchema as ConfiguracionCreateInputObjectSchema } from "./objects/ConfiguracionCreateInput.schema.ts";
import { ConfiguracionIncludeObjectSchema as ConfiguracionIncludeObjectSchema } from "./objects/ConfiguracionInclude.schema.ts";
import { ConfiguracionSelectObjectSchema as ConfiguracionSelectObjectSchema } from "./objects/ConfiguracionSelect.schema.ts";
import { ConfiguracionUncheckedCreateInputObjectSchema as ConfiguracionUncheckedCreateInputObjectSchema } from "./objects/ConfiguracionUncheckedCreateInput.schema.ts";

export const ConfiguracionCreateOneSchema: z.ZodType<Prisma.ConfiguracionCreateArgs> = z
	.object({
		select: ConfiguracionSelectObjectSchema.optional(),
		include: ConfiguracionIncludeObjectSchema.optional(),
		data: z.union([ConfiguracionCreateInputObjectSchema, ConfiguracionUncheckedCreateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.ConfiguracionCreateArgs>;

export const ConfiguracionCreateOneZodSchema = z
	.object({
		select: ConfiguracionSelectObjectSchema.optional(),
		include: ConfiguracionIncludeObjectSchema.optional(),
		data: z.union([ConfiguracionCreateInputObjectSchema, ConfiguracionUncheckedCreateInputObjectSchema]),
	})
	.strict();
