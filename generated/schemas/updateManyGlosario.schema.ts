import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { GlosarioUpdateManyMutationInputObjectSchema as GlosarioUpdateManyMutationInputObjectSchema } from "./objects/GlosarioUpdateManyMutationInput.schema.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./objects/GlosarioWhereInput.schema.ts";

export const GlosarioUpdateManySchema: z.ZodType<Prisma.GlosarioUpdateManyArgs> =
	z
		.object({
			data: GlosarioUpdateManyMutationInputObjectSchema,
			where: GlosarioWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.GlosarioUpdateManyArgs>;

export const GlosarioUpdateManyZodSchema = z
	.object({
		data: GlosarioUpdateManyMutationInputObjectSchema,
		where: GlosarioWhereInputObjectSchema.optional(),
	})
	.strict();
