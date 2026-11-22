import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./LibroCategoriaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => LibroCategoriaWhereInputObjectSchema).optional(),
			some: z.lazy(() => LibroCategoriaWhereInputObjectSchema).optional(),
			none: z.lazy(() => LibroCategoriaWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroCategoriaListRelationFilterObjectSchema: z.ZodType<Prisma.LibroCategoriaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaListRelationFilter>;
export const LibroCategoriaListRelationFilterObjectZodSchema = makeSchema();
