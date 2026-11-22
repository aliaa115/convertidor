import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionIncludeObjectSchema as ConfiguracionIncludeObjectSchema } from "./objects/ConfiguracionInclude.schema.ts";
import { ConfiguracionSelectObjectSchema as ConfiguracionSelectObjectSchema } from "./objects/ConfiguracionSelect.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./objects/ConfiguracionWhereUniqueInput.schema.ts";

export const ConfiguracionFindUniqueOrThrowSchema: z.ZodType<Prisma.ConfiguracionFindUniqueOrThrowArgs> =
	z
		.object({
			select: ConfiguracionSelectObjectSchema.optional(),
			include: ConfiguracionIncludeObjectSchema.optional(),
			where: ConfiguracionWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionFindUniqueOrThrowArgs>;

export const ConfiguracionFindUniqueOrThrowZodSchema = z
	.object({
		select: ConfiguracionSelectObjectSchema.optional(),
		include: ConfiguracionIncludeObjectSchema.optional(),
		where: ConfiguracionWhereUniqueInputObjectSchema,
	})
	.strict();
