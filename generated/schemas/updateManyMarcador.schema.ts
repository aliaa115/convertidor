import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { MarcadorUpdateManyMutationInputObjectSchema as MarcadorUpdateManyMutationInputObjectSchema } from "./objects/MarcadorUpdateManyMutationInput.schema.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./objects/MarcadorWhereInput.schema.ts";

export const MarcadorUpdateManySchema: z.ZodType<Prisma.MarcadorUpdateManyArgs> =
	z
		.object({
			data: MarcadorUpdateManyMutationInputObjectSchema,
			where: MarcadorWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.MarcadorUpdateManyArgs>;

export const MarcadorUpdateManyZodSchema = z
	.object({
		data: MarcadorUpdateManyMutationInputObjectSchema,
		where: MarcadorWhereInputObjectSchema.optional(),
	})
	.strict();
