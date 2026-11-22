import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from "./objects/UsuarioInclude.schema.ts";
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from "./objects/UsuarioSelect.schema.ts";
import { UsuarioUncheckedUpdateInputObjectSchema as UsuarioUncheckedUpdateInputObjectSchema } from "./objects/UsuarioUncheckedUpdateInput.schema.ts";
import { UsuarioUpdateInputObjectSchema as UsuarioUpdateInputObjectSchema } from "./objects/UsuarioUpdateInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./objects/UsuarioWhereUniqueInput.schema.ts";

export const UsuarioUpdateOneSchema: z.ZodType<Prisma.UsuarioUpdateArgs> = z
	.object({
		select: UsuarioSelectObjectSchema.optional(),
		include: UsuarioIncludeObjectSchema.optional(),
		data: z.union([
			UsuarioUpdateInputObjectSchema,
			UsuarioUncheckedUpdateInputObjectSchema,
		]),
		where: UsuarioWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.UsuarioUpdateArgs>;

export const UsuarioUpdateOneZodSchema = z
	.object({
		select: UsuarioSelectObjectSchema.optional(),
		include: UsuarioIncludeObjectSchema.optional(),
		data: z.union([
			UsuarioUpdateInputObjectSchema,
			UsuarioUncheckedUpdateInputObjectSchema,
		]),
		where: UsuarioWhereUniqueInputObjectSchema,
	})
	.strict();
