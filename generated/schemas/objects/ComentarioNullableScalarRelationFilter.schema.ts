import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./ComentarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z
				.lazy(() => ComentarioWhereInputObjectSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => ComentarioWhereInputObjectSchema)
				.optional()
				.nullable(),
		})
		.strict();
export const ComentarioNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ComentarioNullableScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioNullableScalarRelationFilter>;
export const ComentarioNullableScalarRelationFilterObjectZodSchema =
	makeSchema();
