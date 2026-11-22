import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroSelectObjectSchema as LibroSelectObjectSchema } from "./objects/LibroSelect.schema.ts";
import { LibroUpdateManyMutationInputObjectSchema as LibroUpdateManyMutationInputObjectSchema } from "./objects/LibroUpdateManyMutationInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./objects/LibroWhereInput.schema.ts";

export const LibroUpdateManyAndReturnSchema: z.ZodType<Prisma.LibroUpdateManyAndReturnArgs> =
	z
		.object({
			select: LibroSelectObjectSchema.optional(),
			data: LibroUpdateManyMutationInputObjectSchema,
			where: LibroWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroUpdateManyAndReturnArgs>;

export const LibroUpdateManyAndReturnZodSchema = z
	.object({
		select: LibroSelectObjectSchema.optional(),
		data: LibroUpdateManyMutationInputObjectSchema,
		where: LibroWhereInputObjectSchema.optional(),
	})
	.strict();
