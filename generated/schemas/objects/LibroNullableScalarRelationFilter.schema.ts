import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z
				.lazy(() => LibroWhereInputObjectSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => LibroWhereInputObjectSchema)
				.optional()
				.nullable(),
		})
		.strict();
export const LibroNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.LibroNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LibroNullableScalarRelationFilter>;
export const LibroNullableScalarRelationFilterObjectZodSchema = makeSchema();
