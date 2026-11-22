import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CapituloUpdateManyMutationInputObjectSchema as CapituloUpdateManyMutationInputObjectSchema } from "./objects/CapituloUpdateManyMutationInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./objects/CapituloWhereInput.schema.ts";

export const CapituloUpdateManySchema: z.ZodType<Prisma.CapituloUpdateManyArgs> =
	z
		.object({
			data: CapituloUpdateManyMutationInputObjectSchema,
			where: CapituloWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.CapituloUpdateManyArgs>;

export const CapituloUpdateManyZodSchema = z
	.object({
		data: CapituloUpdateManyMutationInputObjectSchema,
		where: CapituloWhereInputObjectSchema.optional(),
	})
	.strict();
