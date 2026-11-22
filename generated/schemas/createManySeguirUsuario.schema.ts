import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { SeguirUsuarioCreateManyInputObjectSchema as SeguirUsuarioCreateManyInputObjectSchema } from "./objects/SeguirUsuarioCreateManyInput.schema.ts";

export const SeguirUsuarioCreateManySchema: z.ZodType<Prisma.SeguirUsuarioCreateManyArgs> = z
	.object({ data: z.union([SeguirUsuarioCreateManyInputObjectSchema, z.array(SeguirUsuarioCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateManyArgs>;

export const SeguirUsuarioCreateManyZodSchema = z
	.object({ data: z.union([SeguirUsuarioCreateManyInputObjectSchema, z.array(SeguirUsuarioCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
