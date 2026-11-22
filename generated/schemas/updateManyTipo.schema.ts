import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { TipoUpdateManyMutationInputObjectSchema as TipoUpdateManyMutationInputObjectSchema } from "./objects/TipoUpdateManyMutationInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./objects/TipoWhereInput.schema.ts";

export const TipoUpdateManySchema: z.ZodType<Prisma.TipoUpdateManyArgs> = z
	.object({
		data: TipoUpdateManyMutationInputObjectSchema,
		where: TipoWhereInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoUpdateManyArgs>;

export const TipoUpdateManyZodSchema = z
	.object({
		data: TipoUpdateManyMutationInputObjectSchema,
		where: TipoWhereInputObjectSchema.optional(),
	})
	.strict();
