import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./objects/UsuarioWhereInput.schema.ts";

export const UsuarioDeleteManySchema: z.ZodType<Prisma.UsuarioDeleteManyArgs> =
	z
		.object({ where: UsuarioWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.UsuarioDeleteManyArgs>;

export const UsuarioDeleteManyZodSchema = z
	.object({ where: UsuarioWhereInputObjectSchema.optional() })
	.strict();
