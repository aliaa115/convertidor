import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./objects/ComentarioSelect.schema.ts";
import { ComentarioUpdateManyMutationInputObjectSchema as ComentarioUpdateManyMutationInputObjectSchema } from "./objects/ComentarioUpdateManyMutationInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./objects/ComentarioWhereInput.schema.ts";

export const ComentarioUpdateManyAndReturnSchema: z.ZodType<Prisma.ComentarioUpdateManyAndReturnArgs> =
	z
		.object({
			select: ComentarioSelectObjectSchema.optional(),
			data: ComentarioUpdateManyMutationInputObjectSchema,
			where: ComentarioWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ComentarioUpdateManyAndReturnArgs>;

export const ComentarioUpdateManyAndReturnZodSchema = z
	.object({
		select: ComentarioSelectObjectSchema.optional(),
		data: ComentarioUpdateManyMutationInputObjectSchema,
		where: ComentarioWhereInputObjectSchema.optional(),
	})
	.strict();
