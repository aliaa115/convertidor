import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z
				.lazy(() => EscritorWhereInputObjectSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => EscritorWhereInputObjectSchema)
				.optional()
				.nullable(),
		})
		.strict();
export const EscritorNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.EscritorNullableScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorNullableScalarRelationFilter>;
export const EscritorNullableScalarRelationFilterObjectZodSchema = makeSchema();
