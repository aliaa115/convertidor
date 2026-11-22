import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCreateInputObjectSchema as LibroCreateInputObjectSchema } from "./objects/LibroCreateInput.schema.ts";
import { LibroIncludeObjectSchema as LibroIncludeObjectSchema } from "./objects/LibroInclude.schema.ts";
import { LibroSelectObjectSchema as LibroSelectObjectSchema } from "./objects/LibroSelect.schema.ts";
import { LibroUncheckedCreateInputObjectSchema as LibroUncheckedCreateInputObjectSchema } from "./objects/LibroUncheckedCreateInput.schema.ts";
import { LibroUncheckedUpdateInputObjectSchema as LibroUncheckedUpdateInputObjectSchema } from "./objects/LibroUncheckedUpdateInput.schema.ts";
import { LibroUpdateInputObjectSchema as LibroUpdateInputObjectSchema } from "./objects/LibroUpdateInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./objects/LibroWhereUniqueInput.schema.ts";

export const LibroUpsertOneSchema: z.ZodType<Prisma.LibroUpsertArgs> = z
	.object({
		select: LibroSelectObjectSchema.optional(),
		include: LibroIncludeObjectSchema.optional(),
		where: LibroWhereUniqueInputObjectSchema,
		create: z.union([LibroCreateInputObjectSchema, LibroUncheckedCreateInputObjectSchema]),
		update: z.union([LibroUpdateInputObjectSchema, LibroUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroUpsertArgs>;

export const LibroUpsertOneZodSchema = z
	.object({
		select: LibroSelectObjectSchema.optional(),
		include: LibroIncludeObjectSchema.optional(),
		where: LibroWhereUniqueInputObjectSchema,
		create: z.union([LibroCreateInputObjectSchema, LibroUncheckedCreateInputObjectSchema]),
		update: z.union([LibroUpdateInputObjectSchema, LibroUncheckedUpdateInputObjectSchema]),
	})
	.strict();
