import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaIncludeObjectSchema as LibroCategoriaIncludeObjectSchema } from "./objects/LibroCategoriaInclude.schema.ts";
import { LibroCategoriaSelectObjectSchema as LibroCategoriaSelectObjectSchema } from "./objects/LibroCategoriaSelect.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./objects/LibroCategoriaWhereUniqueInput.schema.ts";

export const LibroCategoriaFindUniqueOrThrowSchema: z.ZodType<Prisma.LibroCategoriaFindUniqueOrThrowArgs> =
	z
		.object({
			select: LibroCategoriaSelectObjectSchema.optional(),
			include: LibroCategoriaIncludeObjectSchema.optional(),
			where: LibroCategoriaWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaFindUniqueOrThrowArgs>;

export const LibroCategoriaFindUniqueOrThrowZodSchema = z
	.object({
		select: LibroCategoriaSelectObjectSchema.optional(),
		include: LibroCategoriaIncludeObjectSchema.optional(),
		where: LibroCategoriaWhereUniqueInputObjectSchema,
	})
	.strict();
