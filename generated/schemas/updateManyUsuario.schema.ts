import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { UsuarioUpdateManyMutationInputObjectSchema as UsuarioUpdateManyMutationInputObjectSchema } from "./objects/UsuarioUpdateManyMutationInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./objects/UsuarioWhereInput.schema.ts";

export const UsuarioUpdateManySchema: z.ZodType<Prisma.UsuarioUpdateManyArgs> = z
	.object({ data: UsuarioUpdateManyMutationInputObjectSchema, where: UsuarioWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.UsuarioUpdateManyArgs>;

export const UsuarioUpdateManyZodSchema = z.object({ data: UsuarioUpdateManyMutationInputObjectSchema, where: UsuarioWhereInputObjectSchema.optional() }).strict();
