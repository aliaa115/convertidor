import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaCreateInputObjectSchema as LibroCategoriaCreateInputObjectSchema } from "./objects/LibroCategoriaCreateInput.schema.ts";
import { LibroCategoriaIncludeObjectSchema as LibroCategoriaIncludeObjectSchema } from "./objects/LibroCategoriaInclude.schema.ts";
import { LibroCategoriaSelectObjectSchema as LibroCategoriaSelectObjectSchema } from "./objects/LibroCategoriaSelect.schema.ts";
import { LibroCategoriaUncheckedCreateInputObjectSchema as LibroCategoriaUncheckedCreateInputObjectSchema } from "./objects/LibroCategoriaUncheckedCreateInput.schema.ts";

export const LibroCategoriaCreateOneSchema: z.ZodType<Prisma.LibroCategoriaCreateArgs> =
	z
		.object({
			select: LibroCategoriaSelectObjectSchema.optional(),
			include: LibroCategoriaIncludeObjectSchema.optional(),
			data: z.union([
				LibroCategoriaCreateInputObjectSchema,
				LibroCategoriaUncheckedCreateInputObjectSchema,
			]),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaCreateArgs>;

export const LibroCategoriaCreateOneZodSchema = z
	.object({
		select: LibroCategoriaSelectObjectSchema.optional(),
		include: LibroCategoriaIncludeObjectSchema.optional(),
		data: z.union([
			LibroCategoriaCreateInputObjectSchema,
			LibroCategoriaUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
