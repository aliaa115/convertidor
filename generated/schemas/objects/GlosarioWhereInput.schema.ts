import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EscritorScalarRelationFilterObjectSchema as EscritorScalarRelationFilterObjectSchema } from "./EscritorScalarRelationFilter.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroScalarRelationFilterObjectSchema as LibroScalarRelationFilterObjectSchema } from "./LibroScalarRelationFilter.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const glosariowhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => GlosarioWhereInputObjectSchema), z.lazy(() => GlosarioWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => GlosarioWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => GlosarioWhereInputObjectSchema), z.lazy(() => GlosarioWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		palabra: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		significado: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		libroId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		escritorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		libro: z.union([z.lazy(() => LibroScalarRelationFilterObjectSchema), z.lazy(() => LibroWhereInputObjectSchema)]).optional(),
		escritor: z.union([z.lazy(() => EscritorScalarRelationFilterObjectSchema), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
		estado: z.union([z.lazy(() => EstadoScalarRelationFilterObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema)]).optional(),
	})
	.strict();
export const GlosarioWhereInputObjectSchema: z.ZodType<Prisma.GlosarioWhereInput> = glosariowhereinputSchema as unknown as z.ZodType<Prisma.GlosarioWhereInput>;
export const GlosarioWhereInputObjectZodSchema = glosariowhereinputSchema;
