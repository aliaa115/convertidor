import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z
				.lazy(() => TipoWhereInputObjectSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => TipoWhereInputObjectSchema)
				.optional()
				.nullable(),
		})
		.strict();
export const TipoNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TipoNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TipoNullableScalarRelationFilter>;
export const TipoNullableScalarRelationFilterObjectZodSchema = makeSchema();
