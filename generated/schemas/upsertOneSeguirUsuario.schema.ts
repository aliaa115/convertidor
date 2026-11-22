import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioCreateInputObjectSchema as SeguirUsuarioCreateInputObjectSchema } from "./objects/SeguirUsuarioCreateInput.schema.ts";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./objects/SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./objects/SeguirUsuarioSelect.schema.ts";
import { SeguirUsuarioUncheckedCreateInputObjectSchema as SeguirUsuarioUncheckedCreateInputObjectSchema } from "./objects/SeguirUsuarioUncheckedCreateInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateInputObjectSchema as SeguirUsuarioUncheckedUpdateInputObjectSchema } from "./objects/SeguirUsuarioUncheckedUpdateInput.schema.ts";
import { SeguirUsuarioUpdateInputObjectSchema as SeguirUsuarioUpdateInputObjectSchema } from "./objects/SeguirUsuarioUpdateInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

export const SeguirUsuarioUpsertOneSchema: z.ZodType<Prisma.SeguirUsuarioUpsertArgs> =
	z
		.object({
			select: SeguirUsuarioSelectObjectSchema.optional(),
			include: SeguirUsuarioIncludeObjectSchema.optional(),
			where: SeguirUsuarioWhereUniqueInputObjectSchema,
			create: z.union([
				SeguirUsuarioCreateInputObjectSchema,
				SeguirUsuarioUncheckedCreateInputObjectSchema,
			]),
			update: z.union([
				SeguirUsuarioUpdateInputObjectSchema,
				SeguirUsuarioUncheckedUpdateInputObjectSchema,
			]),
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioUpsertArgs>;

export const SeguirUsuarioUpsertOneZodSchema = z
	.object({
		select: SeguirUsuarioSelectObjectSchema.optional(),
		include: SeguirUsuarioIncludeObjectSchema.optional(),
		where: SeguirUsuarioWhereUniqueInputObjectSchema,
		create: z.union([
			SeguirUsuarioCreateInputObjectSchema,
			SeguirUsuarioUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			SeguirUsuarioUpdateInputObjectSchema,
			SeguirUsuarioUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict();
