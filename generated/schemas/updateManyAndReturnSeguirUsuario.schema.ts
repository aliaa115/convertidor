import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./objects/SeguirUsuarioSelect.schema.ts";
import { SeguirUsuarioUpdateManyMutationInputObjectSchema as SeguirUsuarioUpdateManyMutationInputObjectSchema } from "./objects/SeguirUsuarioUpdateManyMutationInput.schema.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./objects/SeguirUsuarioWhereInput.schema.ts";

export const SeguirUsuarioUpdateManyAndReturnSchema: z.ZodType<Prisma.SeguirUsuarioUpdateManyAndReturnArgs> =
	z
		.object({
			select: SeguirUsuarioSelectObjectSchema.optional(),
			data: SeguirUsuarioUpdateManyMutationInputObjectSchema,
			where: SeguirUsuarioWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateManyAndReturnArgs>;

export const SeguirUsuarioUpdateManyAndReturnZodSchema = z
	.object({
		select: SeguirUsuarioSelectObjectSchema.optional(),
		data: SeguirUsuarioUpdateManyMutationInputObjectSchema,
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
	})
	.strict();
