import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EstadoCreateInputObjectSchema as EstadoCreateInputObjectSchema } from "./objects/EstadoCreateInput.schema.ts";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./objects/EstadoInclude.schema.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./objects/EstadoSelect.schema.ts";
import { EstadoUncheckedCreateInputObjectSchema as EstadoUncheckedCreateInputObjectSchema } from "./objects/EstadoUncheckedCreateInput.schema.ts";
import { EstadoUncheckedUpdateInputObjectSchema as EstadoUncheckedUpdateInputObjectSchema } from "./objects/EstadoUncheckedUpdateInput.schema.ts";
import { EstadoUpdateInputObjectSchema as EstadoUpdateInputObjectSchema } from "./objects/EstadoUpdateInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

export const EstadoUpsertOneSchema: z.ZodType<Prisma.EstadoUpsertArgs> = z
	.object({
		select: EstadoSelectObjectSchema.optional(),
		include: EstadoIncludeObjectSchema.optional(),
		where: EstadoWhereUniqueInputObjectSchema,
		create: z.union([EstadoCreateInputObjectSchema, EstadoUncheckedCreateInputObjectSchema]),
		update: z.union([EstadoUpdateInputObjectSchema, EstadoUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoUpsertArgs>;

export const EstadoUpsertOneZodSchema = z
	.object({
		select: EstadoSelectObjectSchema.optional(),
		include: EstadoIncludeObjectSchema.optional(),
		where: EstadoWhereUniqueInputObjectSchema,
		create: z.union([EstadoCreateInputObjectSchema, EstadoUncheckedCreateInputObjectSchema]),
		update: z.union([EstadoUpdateInputObjectSchema, EstadoUncheckedUpdateInputObjectSchema]),
	})
	.strict();
