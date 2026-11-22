import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from "./objects/UsuarioInclude.schema.ts";
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from "./objects/UsuarioSelect.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./objects/UsuarioWhereUniqueInput.schema.ts";

export const UsuarioFindUniqueOrThrowSchema: z.ZodType<Prisma.UsuarioFindUniqueOrThrowArgs> =
	z
		.object({
			select: UsuarioSelectObjectSchema.optional(),
			include: UsuarioIncludeObjectSchema.optional(),
			where: UsuarioWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.UsuarioFindUniqueOrThrowArgs>;

export const UsuarioFindUniqueOrThrowZodSchema = z
	.object({
		select: UsuarioSelectObjectSchema.optional(),
		include: UsuarioIncludeObjectSchema.optional(),
		where: UsuarioWhereUniqueInputObjectSchema,
	})
	.strict();
