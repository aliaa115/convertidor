import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from "./objects/UsuarioInclude.schema.ts";
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from "./objects/UsuarioSelect.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./objects/UsuarioWhereUniqueInput.schema.ts";

export const UsuarioDeleteOneSchema: z.ZodType<Prisma.UsuarioDeleteArgs> = z
	.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), where: UsuarioWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.UsuarioDeleteArgs>;

export const UsuarioDeleteOneZodSchema = z
	.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), where: UsuarioWhereUniqueInputObjectSchema })
	.strict();
