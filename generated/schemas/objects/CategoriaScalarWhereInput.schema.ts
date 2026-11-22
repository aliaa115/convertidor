import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const categoriascalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => CategoriaScalarWhereInputObjectSchema), z.lazy(() => CategoriaScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => CategoriaScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => CategoriaScalarWhereInputObjectSchema), z.lazy(() => CategoriaScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		nombre: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const CategoriaScalarWhereInputObjectSchema: z.ZodType<Prisma.CategoriaScalarWhereInput> = categoriascalarwhereinputSchema as unknown as z.ZodType<Prisma.CategoriaScalarWhereInput>;
export const CategoriaScalarWhereInputObjectZodSchema = categoriascalarwhereinputSchema;
