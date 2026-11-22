import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioListRelationFilterObjectSchema as ComentarioListRelationFilterObjectSchema } from "./ComentarioListRelationFilter.schema.ts";
import { ConfiguracionListRelationFilterObjectSchema as ConfiguracionListRelationFilterObjectSchema } from "./ConfiguracionListRelationFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroListRelationFilterObjectSchema as LibroListRelationFilterObjectSchema } from "./LibroListRelationFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const tipowhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => TipoWhereInputObjectSchema), z.lazy(() => TipoWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => TipoWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => TipoWhereInputObjectSchema), z.lazy(() => TipoWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		nombre: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		tabla: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estado: z.union([z.lazy(() => EstadoScalarRelationFilterObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema)]).optional(),
		configuraciones: z.lazy(() => ConfiguracionListRelationFilterObjectSchema).optional(),
		libros: z.lazy(() => LibroListRelationFilterObjectSchema).optional(),
		comentarios: z.lazy(() => ComentarioListRelationFilterObjectSchema).optional(),
	})
	.strict();
export const TipoWhereInputObjectSchema: z.ZodType<Prisma.TipoWhereInput> = tipowhereinputSchema as unknown as z.ZodType<Prisma.TipoWhereInput>;
export const TipoWhereInputObjectZodSchema = tipowhereinputSchema;
