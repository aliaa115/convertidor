import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoUpdateManyMutationInputObjectSchema as EstadoUpdateManyMutationInputObjectSchema } from "./objects/EstadoUpdateManyMutationInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./objects/EstadoWhereInput.schema.ts";

export const EstadoUpdateManySchema: z.ZodType<Prisma.EstadoUpdateManyArgs> = z
	.object({
		data: EstadoUpdateManyMutationInputObjectSchema,
		where: EstadoWhereInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoUpdateManyArgs>;

export const EstadoUpdateManyZodSchema = z
	.object({
		data: EstadoUpdateManyMutationInputObjectSchema,
		where: EstadoWhereInputObjectSchema.optional(),
	})
	.strict();
