import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z
				.lazy(() => UsuarioWhereInputObjectSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => UsuarioWhereInputObjectSchema)
				.optional()
				.nullable(),
		})
		.strict();
export const UsuarioNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UsuarioNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioNullableScalarRelationFilter>;
export const UsuarioNullableScalarRelationFilterObjectZodSchema = makeSchema();
