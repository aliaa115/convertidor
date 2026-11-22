import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./objects/SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./objects/SeguirUsuarioSelect.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

export const SeguirUsuarioDeleteOneSchema: z.ZodType<Prisma.SeguirUsuarioDeleteArgs> =
	z
		.object({
			select: SeguirUsuarioSelectObjectSchema.optional(),
			include: SeguirUsuarioIncludeObjectSchema.optional(),
			where: SeguirUsuarioWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioDeleteArgs>;

export const SeguirUsuarioDeleteOneZodSchema = z
	.object({
		select: SeguirUsuarioSelectObjectSchema.optional(),
		include: SeguirUsuarioIncludeObjectSchema.optional(),
		where: SeguirUsuarioWhereUniqueInputObjectSchema,
	})
	.strict();
