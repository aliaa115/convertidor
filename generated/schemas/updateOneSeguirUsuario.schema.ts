import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./objects/SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./objects/SeguirUsuarioSelect.schema.ts";
import { SeguirUsuarioUncheckedUpdateInputObjectSchema as SeguirUsuarioUncheckedUpdateInputObjectSchema } from "./objects/SeguirUsuarioUncheckedUpdateInput.schema.ts";
import { SeguirUsuarioUpdateInputObjectSchema as SeguirUsuarioUpdateInputObjectSchema } from "./objects/SeguirUsuarioUpdateInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

export const SeguirUsuarioUpdateOneSchema: z.ZodType<Prisma.SeguirUsuarioUpdateArgs> =
	z
		.object({
			select: SeguirUsuarioSelectObjectSchema.optional(),
			include: SeguirUsuarioIncludeObjectSchema.optional(),
			data: z.union([
				SeguirUsuarioUpdateInputObjectSchema,
				SeguirUsuarioUncheckedUpdateInputObjectSchema,
			]),
			where: SeguirUsuarioWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateArgs>;

export const SeguirUsuarioUpdateOneZodSchema = z
	.object({
		select: SeguirUsuarioSelectObjectSchema.optional(),
		include: SeguirUsuarioIncludeObjectSchema.optional(),
		data: z.union([
			SeguirUsuarioUpdateInputObjectSchema,
			SeguirUsuarioUncheckedUpdateInputObjectSchema,
		]),
		where: SeguirUsuarioWhereUniqueInputObjectSchema,
	})
	.strict();
