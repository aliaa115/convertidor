import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from "./objects/UsuarioSelect.schema.ts";
import { UsuarioUpdateManyMutationInputObjectSchema as UsuarioUpdateManyMutationInputObjectSchema } from "./objects/UsuarioUpdateManyMutationInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./objects/UsuarioWhereInput.schema.ts";

export const UsuarioUpdateManyAndReturnSchema: z.ZodType<Prisma.UsuarioUpdateManyAndReturnArgs> =
	z
		.object({
			select: UsuarioSelectObjectSchema.optional(),
			data: UsuarioUpdateManyMutationInputObjectSchema,
			where: UsuarioWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.UsuarioUpdateManyAndReturnArgs>;

export const UsuarioUpdateManyAndReturnZodSchema = z
	.object({
		select: UsuarioSelectObjectSchema.optional(),
		data: UsuarioUpdateManyMutationInputObjectSchema,
		where: UsuarioWhereInputObjectSchema.optional(),
	})
	.strict();
