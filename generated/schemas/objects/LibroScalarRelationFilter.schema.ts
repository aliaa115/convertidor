import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroScalarRelationFilterObjectSchema: z.ZodType<Prisma.LibroScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroScalarRelationFilter>;
export const LibroScalarRelationFilterObjectZodSchema = makeSchema();
