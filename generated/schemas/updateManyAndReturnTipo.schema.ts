import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { TipoSelectObjectSchema as TipoSelectObjectSchema } from "./objects/TipoSelect.schema.ts";
import { TipoUpdateManyMutationInputObjectSchema as TipoUpdateManyMutationInputObjectSchema } from "./objects/TipoUpdateManyMutationInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./objects/TipoWhereInput.schema.ts";

export const TipoUpdateManyAndReturnSchema: z.ZodType<Prisma.TipoUpdateManyAndReturnArgs> =
	z
		.object({
			select: TipoSelectObjectSchema.optional(),
			data: TipoUpdateManyMutationInputObjectSchema,
			where: TipoWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.TipoUpdateManyAndReturnArgs>;

export const TipoUpdateManyAndReturnZodSchema = z
	.object({
		select: TipoSelectObjectSchema.optional(),
		data: TipoUpdateManyMutationInputObjectSchema,
		where: TipoWhereInputObjectSchema.optional(),
	})
	.strict();
