import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioUpdateManyMutationInputObjectSchema as SeguirUsuarioUpdateManyMutationInputObjectSchema } from "./objects/SeguirUsuarioUpdateManyMutationInput.schema.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./objects/SeguirUsuarioWhereInput.schema.ts";

export const SeguirUsuarioUpdateManySchema: z.ZodType<Prisma.SeguirUsuarioUpdateManyArgs> =
	z
		.object({
			data: SeguirUsuarioUpdateManyMutationInputObjectSchema,
			where: SeguirUsuarioWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateManyArgs>;

export const SeguirUsuarioUpdateManyZodSchema = z
	.object({
		data: SeguirUsuarioUpdateManyMutationInputObjectSchema,
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
	})
	.strict();
