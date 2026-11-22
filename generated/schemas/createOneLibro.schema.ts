import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCreateInputObjectSchema as LibroCreateInputObjectSchema } from "./objects/LibroCreateInput.schema.ts";
import { LibroIncludeObjectSchema as LibroIncludeObjectSchema } from "./objects/LibroInclude.schema.ts";
import { LibroSelectObjectSchema as LibroSelectObjectSchema } from "./objects/LibroSelect.schema.ts";
import { LibroUncheckedCreateInputObjectSchema as LibroUncheckedCreateInputObjectSchema } from "./objects/LibroUncheckedCreateInput.schema.ts";

export const LibroCreateOneSchema: z.ZodType<Prisma.LibroCreateArgs> = z
	.object({ select: LibroSelectObjectSchema.optional(), include: LibroIncludeObjectSchema.optional(), data: z.union([LibroCreateInputObjectSchema, LibroUncheckedCreateInputObjectSchema]) })
	.strict() as unknown as z.ZodType<Prisma.LibroCreateArgs>;

export const LibroCreateOneZodSchema = z
	.object({ select: LibroSelectObjectSchema.optional(), include: LibroIncludeObjectSchema.optional(), data: z.union([LibroCreateInputObjectSchema, LibroUncheckedCreateInputObjectSchema]) })
	.strict();
