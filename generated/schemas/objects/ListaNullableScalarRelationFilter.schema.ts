import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z
				.lazy(() => ListaWhereInputObjectSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => ListaWhereInputObjectSchema)
				.optional()
				.nullable(),
		})
		.strict();
export const ListaNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ListaNullableScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaNullableScalarRelationFilter>;
export const ListaNullableScalarRelationFilterObjectZodSchema = makeSchema();
