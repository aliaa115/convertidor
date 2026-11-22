import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./objects/EstadoInclude.schema.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./objects/EstadoSelect.schema.ts";
import { EstadoUncheckedUpdateInputObjectSchema as EstadoUncheckedUpdateInputObjectSchema } from "./objects/EstadoUncheckedUpdateInput.schema.ts";
import { EstadoUpdateInputObjectSchema as EstadoUpdateInputObjectSchema } from "./objects/EstadoUpdateInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

export const EstadoUpdateOneSchema: z.ZodType<Prisma.EstadoUpdateArgs> = z
	.object({
		select: EstadoSelectObjectSchema.optional(),
		include: EstadoIncludeObjectSchema.optional(),
		data: z.union([
			EstadoUpdateInputObjectSchema,
			EstadoUncheckedUpdateInputObjectSchema,
		]),
		where: EstadoWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoUpdateArgs>;

export const EstadoUpdateOneZodSchema = z
	.object({
		select: EstadoSelectObjectSchema.optional(),
		include: EstadoIncludeObjectSchema.optional(),
		data: z.union([
			EstadoUpdateInputObjectSchema,
			EstadoUncheckedUpdateInputObjectSchema,
		]),
		where: EstadoWhereUniqueInputObjectSchema,
	})
	.strict();
