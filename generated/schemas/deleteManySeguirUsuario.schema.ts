import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./objects/SeguirUsuarioWhereInput.schema.ts";

export const SeguirUsuarioDeleteManySchema: z.ZodType<Prisma.SeguirUsuarioDeleteManyArgs> =
	z
		.object({ where: SeguirUsuarioWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioDeleteManyArgs>;

export const SeguirUsuarioDeleteManyZodSchema = z
	.object({ where: SeguirUsuarioWhereInputObjectSchema.optional() })
	.strict();
