import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ConfiguracionUpdateManyMutationInputObjectSchema as ConfiguracionUpdateManyMutationInputObjectSchema } from "./objects/ConfiguracionUpdateManyMutationInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./objects/ConfiguracionWhereInput.schema.ts";

export const ConfiguracionUpdateManySchema: z.ZodType<Prisma.ConfiguracionUpdateManyArgs> = z
	.object({ data: ConfiguracionUpdateManyMutationInputObjectSchema, where: ConfiguracionWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.ConfiguracionUpdateManyArgs>;

export const ConfiguracionUpdateManyZodSchema = z.object({ data: ConfiguracionUpdateManyMutationInputObjectSchema, where: ConfiguracionWhereInputObjectSchema.optional() }).strict();
