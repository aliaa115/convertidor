import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroUpdateManyMutationInputObjectSchema as LibroUpdateManyMutationInputObjectSchema } from "./objects/LibroUpdateManyMutationInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./objects/LibroWhereInput.schema.ts";

export const LibroUpdateManySchema: z.ZodType<Prisma.LibroUpdateManyArgs> = z
	.object({
		data: LibroUpdateManyMutationInputObjectSchema,
		where: LibroWhereInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroUpdateManyArgs>;

export const LibroUpdateManyZodSchema = z
	.object({
		data: LibroUpdateManyMutationInputObjectSchema,
		where: LibroWhereInputObjectSchema.optional(),
	})
	.strict();
