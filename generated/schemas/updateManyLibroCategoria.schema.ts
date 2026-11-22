import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaUpdateManyMutationInputObjectSchema as LibroCategoriaUpdateManyMutationInputObjectSchema } from "./objects/LibroCategoriaUpdateManyMutationInput.schema.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./objects/LibroCategoriaWhereInput.schema.ts";

export const LibroCategoriaUpdateManySchema: z.ZodType<Prisma.LibroCategoriaUpdateManyArgs> =
	z
		.object({
			data: LibroCategoriaUpdateManyMutationInputObjectSchema,
			where: LibroCategoriaWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateManyArgs>;

export const LibroCategoriaUpdateManyZodSchema = z
	.object({
		data: LibroCategoriaUpdateManyMutationInputObjectSchema,
		where: LibroCategoriaWhereInputObjectSchema.optional(),
	})
	.strict();
