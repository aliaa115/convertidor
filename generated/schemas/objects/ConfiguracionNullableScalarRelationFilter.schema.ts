import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./ConfiguracionWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z
				.lazy(() => ConfiguracionWhereInputObjectSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => ConfiguracionWhereInputObjectSchema)
				.optional()
				.nullable(),
		})
		.strict();
export const ConfiguracionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ConfiguracionNullableScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionNullableScalarRelationFilter>;
export const ConfiguracionNullableScalarRelationFilterObjectZodSchema =
	makeSchema();
