import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ConfiguracionIncludeObjectSchema as ConfiguracionIncludeObjectSchema } from "./objects/ConfiguracionInclude.schema.ts";
import { ConfiguracionSelectObjectSchema as ConfiguracionSelectObjectSchema } from "./objects/ConfiguracionSelect.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./objects/ConfiguracionWhereUniqueInput.schema.ts";

export const ConfiguracionFindUniqueSchema: z.ZodType<Prisma.ConfiguracionFindUniqueArgs> = z
	.object({ select: ConfiguracionSelectObjectSchema.optional(), include: ConfiguracionIncludeObjectSchema.optional(), where: ConfiguracionWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.ConfiguracionFindUniqueArgs>;

export const ConfiguracionFindUniqueZodSchema = z
	.object({ select: ConfiguracionSelectObjectSchema.optional(), include: ConfiguracionIncludeObjectSchema.optional(), where: ConfiguracionWhereUniqueInputObjectSchema })
	.strict();
