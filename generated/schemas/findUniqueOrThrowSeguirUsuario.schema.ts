import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./objects/SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./objects/SeguirUsuarioSelect.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

export const SeguirUsuarioFindUniqueOrThrowSchema: z.ZodType<Prisma.SeguirUsuarioFindUniqueOrThrowArgs> =
	z
		.object({
			select: SeguirUsuarioSelectObjectSchema.optional(),
			include: SeguirUsuarioIncludeObjectSchema.optional(),
			where: SeguirUsuarioWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioFindUniqueOrThrowArgs>;

export const SeguirUsuarioFindUniqueOrThrowZodSchema = z
	.object({
		select: SeguirUsuarioSelectObjectSchema.optional(),
		include: SeguirUsuarioIncludeObjectSchema.optional(),
		where: SeguirUsuarioWhereUniqueInputObjectSchema,
	})
	.strict();
