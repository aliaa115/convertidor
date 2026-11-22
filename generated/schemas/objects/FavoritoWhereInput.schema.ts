import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EscritorNullableScalarRelationFilterObjectSchema as EscritorNullableScalarRelationFilterObjectSchema } from "./EscritorNullableScalarRelationFilter.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { LibroNullableScalarRelationFilterObjectSchema as LibroNullableScalarRelationFilterObjectSchema } from "./LibroNullableScalarRelationFilter.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const favoritowhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => FavoritoWhereInputObjectSchema), z.lazy(() => FavoritoWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => FavoritoWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => FavoritoWhereInputObjectSchema), z.lazy(() => FavoritoWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		escritorId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		libroId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		escritor: z.union([z.lazy(() => EscritorNullableScalarRelationFilterObjectSchema), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
		libro: z.union([z.lazy(() => LibroNullableScalarRelationFilterObjectSchema), z.lazy(() => LibroWhereInputObjectSchema)]).optional(),
		estado: z.union([z.lazy(() => EstadoScalarRelationFilterObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema)]).optional(),
	})
	.strict();
export const FavoritoWhereInputObjectSchema: z.ZodType<Prisma.FavoritoWhereInput> = favoritowhereinputSchema as unknown as z.ZodType<Prisma.FavoritoWhereInput>;
export const FavoritoWhereInputObjectZodSchema = favoritowhereinputSchema;
