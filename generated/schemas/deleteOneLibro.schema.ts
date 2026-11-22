import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroIncludeObjectSchema as LibroIncludeObjectSchema } from "./objects/LibroInclude.schema.ts";
import { LibroSelectObjectSchema as LibroSelectObjectSchema } from "./objects/LibroSelect.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./objects/LibroWhereUniqueInput.schema.ts";

export const LibroDeleteOneSchema: z.ZodType<Prisma.LibroDeleteArgs> = z
	.object({
		select: LibroSelectObjectSchema.optional(),
		include: LibroIncludeObjectSchema.optional(),
		where: LibroWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.LibroDeleteArgs>;

export const LibroDeleteOneZodSchema = z
	.object({
		select: LibroSelectObjectSchema.optional(),
		include: LibroIncludeObjectSchema.optional(),
		where: LibroWhereUniqueInputObjectSchema,
	})
	.strict();
