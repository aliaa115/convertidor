import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaScalarRelationFilterObjectSchema as CategoriaScalarRelationFilterObjectSchema } from "./CategoriaScalarRelationFilter.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./CategoriaWhereInput.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroScalarRelationFilterObjectSchema as LibroScalarRelationFilterObjectSchema } from "./LibroScalarRelationFilter.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const librocategoriawhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => LibroCategoriaWhereInputObjectSchema), z.lazy(() => LibroCategoriaWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => LibroCategoriaWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => LibroCategoriaWhereInputObjectSchema), z.lazy(() => LibroCategoriaWhereInputObjectSchema).array()]).optional(),
		libroId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		categoriaId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estado: z.union([z.lazy(() => EstadoScalarRelationFilterObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema)]).optional(),
		libro: z.union([z.lazy(() => LibroScalarRelationFilterObjectSchema), z.lazy(() => LibroWhereInputObjectSchema)]).optional(),
		categoria: z.union([z.lazy(() => CategoriaScalarRelationFilterObjectSchema), z.lazy(() => CategoriaWhereInputObjectSchema)]).optional(),
	})
	.strict();
export const LibroCategoriaWhereInputObjectSchema: z.ZodType<Prisma.LibroCategoriaWhereInput> = librocategoriawhereinputSchema as unknown as z.ZodType<Prisma.LibroCategoriaWhereInput>;
export const LibroCategoriaWhereInputObjectZodSchema = librocategoriawhereinputSchema;
