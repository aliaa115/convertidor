import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { UsuarioCreateInputObjectSchema as UsuarioCreateInputObjectSchema } from "./objects/UsuarioCreateInput.schema.ts";
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from "./objects/UsuarioInclude.schema.ts";
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from "./objects/UsuarioSelect.schema.ts";
import { UsuarioUncheckedCreateInputObjectSchema as UsuarioUncheckedCreateInputObjectSchema } from "./objects/UsuarioUncheckedCreateInput.schema.ts";

export const UsuarioCreateOneSchema: z.ZodType<Prisma.UsuarioCreateArgs> = z
	.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), data: z.union([UsuarioCreateInputObjectSchema, UsuarioUncheckedCreateInputObjectSchema]) })
	.strict() as unknown as z.ZodType<Prisma.UsuarioCreateArgs>;

export const UsuarioCreateOneZodSchema = z
	.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), data: z.union([UsuarioCreateInputObjectSchema, UsuarioUncheckedCreateInputObjectSchema]) })
	.strict();
