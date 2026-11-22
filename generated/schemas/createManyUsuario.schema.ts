import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { UsuarioCreateManyInputObjectSchema as UsuarioCreateManyInputObjectSchema } from "./objects/UsuarioCreateManyInput.schema.ts";

export const UsuarioCreateManySchema: z.ZodType<Prisma.UsuarioCreateManyArgs> = z
	.object({ data: z.union([UsuarioCreateManyInputObjectSchema, z.array(UsuarioCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.UsuarioCreateManyArgs>;

export const UsuarioCreateManyZodSchema = z
	.object({ data: z.union([UsuarioCreateManyInputObjectSchema, z.array(UsuarioCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
