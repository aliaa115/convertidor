import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./objects/EstadoInclude.schema.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./objects/EstadoSelect.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

export const EstadoDeleteOneSchema: z.ZodType<Prisma.EstadoDeleteArgs> = z
	.object({
		select: EstadoSelectObjectSchema.optional(),
		include: EstadoIncludeObjectSchema.optional(),
		where: EstadoWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoDeleteArgs>;

export const EstadoDeleteOneZodSchema = z
	.object({
		select: EstadoSelectObjectSchema.optional(),
		include: EstadoIncludeObjectSchema.optional(),
		where: EstadoWhereUniqueInputObjectSchema,
	})
	.strict();
