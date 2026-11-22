import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroIncludeObjectSchema as LibroIncludeObjectSchema } from "./objects/LibroInclude.schema.ts";
import { LibroSelectObjectSchema as LibroSelectObjectSchema } from "./objects/LibroSelect.schema.ts";
import { LibroUncheckedUpdateInputObjectSchema as LibroUncheckedUpdateInputObjectSchema } from "./objects/LibroUncheckedUpdateInput.schema.ts";
import { LibroUpdateInputObjectSchema as LibroUpdateInputObjectSchema } from "./objects/LibroUpdateInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./objects/LibroWhereUniqueInput.schema.ts";

export const LibroUpdateOneSchema: z.ZodType<Prisma.LibroUpdateArgs> = z
	.object({
		select: LibroSelectObjectSchema.optional(),
		include: LibroIncludeObjectSchema.optional(),
		data: z.union([LibroUpdateInputObjectSchema, LibroUncheckedUpdateInputObjectSchema]),
		where: LibroWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.LibroUpdateArgs>;

export const LibroUpdateOneZodSchema = z
	.object({
		select: LibroSelectObjectSchema.optional(),
		include: LibroIncludeObjectSchema.optional(),
		data: z.union([LibroUpdateInputObjectSchema, LibroUncheckedUpdateInputObjectSchema]),
		where: LibroWhereUniqueInputObjectSchema,
	})
	.strict();
