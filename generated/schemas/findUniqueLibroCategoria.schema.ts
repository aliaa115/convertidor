import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaIncludeObjectSchema as LibroCategoriaIncludeObjectSchema } from "./objects/LibroCategoriaInclude.schema.ts";
import { LibroCategoriaSelectObjectSchema as LibroCategoriaSelectObjectSchema } from "./objects/LibroCategoriaSelect.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./objects/LibroCategoriaWhereUniqueInput.schema.ts";

export const LibroCategoriaFindUniqueSchema: z.ZodType<Prisma.LibroCategoriaFindUniqueArgs> =
	z
		.object({
			select: LibroCategoriaSelectObjectSchema.optional(),
			include: LibroCategoriaIncludeObjectSchema.optional(),
			where: LibroCategoriaWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaFindUniqueArgs>;

export const LibroCategoriaFindUniqueZodSchema = z
	.object({
		select: LibroCategoriaSelectObjectSchema.optional(),
		include: LibroCategoriaIncludeObjectSchema.optional(),
		where: LibroCategoriaWhereUniqueInputObjectSchema,
	})
	.strict();
