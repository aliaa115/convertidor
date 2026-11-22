import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./objects/SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./objects/SeguirUsuarioSelect.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

export const SeguirUsuarioFindUniqueSchema: z.ZodType<Prisma.SeguirUsuarioFindUniqueArgs> = z
	.object({ select: SeguirUsuarioSelectObjectSchema.optional(), include: SeguirUsuarioIncludeObjectSchema.optional(), where: SeguirUsuarioWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioFindUniqueArgs>;

export const SeguirUsuarioFindUniqueZodSchema = z
	.object({ select: SeguirUsuarioSelectObjectSchema.optional(), include: SeguirUsuarioIncludeObjectSchema.optional(), where: SeguirUsuarioWhereUniqueInputObjectSchema })
	.strict();
