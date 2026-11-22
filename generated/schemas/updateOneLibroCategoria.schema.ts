import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaIncludeObjectSchema as LibroCategoriaIncludeObjectSchema } from "./objects/LibroCategoriaInclude.schema.ts";
import { LibroCategoriaSelectObjectSchema as LibroCategoriaSelectObjectSchema } from "./objects/LibroCategoriaSelect.schema.ts";
import { LibroCategoriaUncheckedUpdateInputObjectSchema as LibroCategoriaUncheckedUpdateInputObjectSchema } from "./objects/LibroCategoriaUncheckedUpdateInput.schema.ts";
import { LibroCategoriaUpdateInputObjectSchema as LibroCategoriaUpdateInputObjectSchema } from "./objects/LibroCategoriaUpdateInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./objects/LibroCategoriaWhereUniqueInput.schema.ts";

export const LibroCategoriaUpdateOneSchema: z.ZodType<Prisma.LibroCategoriaUpdateArgs> =
	z
		.object({
			select: LibroCategoriaSelectObjectSchema.optional(),
			include: LibroCategoriaIncludeObjectSchema.optional(),
			data: z.union([
				LibroCategoriaUpdateInputObjectSchema,
				LibroCategoriaUncheckedUpdateInputObjectSchema,
			]),
			where: LibroCategoriaWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateArgs>;

export const LibroCategoriaUpdateOneZodSchema = z
	.object({
		select: LibroCategoriaSelectObjectSchema.optional(),
		include: LibroCategoriaIncludeObjectSchema.optional(),
		data: z.union([
			LibroCategoriaUpdateInputObjectSchema,
			LibroCategoriaUncheckedUpdateInputObjectSchema,
		]),
		where: LibroCategoriaWhereUniqueInputObjectSchema,
	})
	.strict();
