import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./objects/ConfiguracionWhereInput.schema.ts";

export const ConfiguracionDeleteManySchema: z.ZodType<Prisma.ConfiguracionDeleteManyArgs> =
	z
		.object({ where: ConfiguracionWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionDeleteManyArgs>;

export const ConfiguracionDeleteManyZodSchema = z
	.object({ where: ConfiguracionWhereInputObjectSchema.optional() })
	.strict();
