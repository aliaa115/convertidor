import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./objects/EstadoSelect.schema.ts";
import { EstadoUpdateManyMutationInputObjectSchema as EstadoUpdateManyMutationInputObjectSchema } from "./objects/EstadoUpdateManyMutationInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./objects/EstadoWhereInput.schema.ts";

export const EstadoUpdateManyAndReturnSchema: z.ZodType<Prisma.EstadoUpdateManyAndReturnArgs> =
	z
		.object({
			select: EstadoSelectObjectSchema.optional(),
			data: EstadoUpdateManyMutationInputObjectSchema,
			where: EstadoWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EstadoUpdateManyAndReturnArgs>;

export const EstadoUpdateManyAndReturnZodSchema = z
	.object({
		select: EstadoSelectObjectSchema.optional(),
		data: EstadoUpdateManyMutationInputObjectSchema,
		where: EstadoWhereInputObjectSchema.optional(),
	})
	.strict();
