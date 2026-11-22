import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";
import { TipoNullableScalarRelationFilterObjectSchema as TipoNullableScalarRelationFilterObjectSchema } from "./TipoNullableScalarRelationFilter.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";
import { UsuarioNullableScalarRelationFilterObjectSchema as UsuarioNullableScalarRelationFilterObjectSchema } from "./UsuarioNullableScalarRelationFilter.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const configuracionwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ConfiguracionWhereInputObjectSchema),
				z.lazy(() => ConfiguracionWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ConfiguracionWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ConfiguracionWhereInputObjectSchema),
				z.lazy(() => ConfiguracionWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		valor: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		usuarioId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		tipoId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		usuario: z
			.union([
				z.lazy(() => UsuarioNullableScalarRelationFilterObjectSchema),
				z.lazy(() => UsuarioWhereInputObjectSchema),
			])
			.optional(),
		tipo: z
			.union([
				z.lazy(() => TipoNullableScalarRelationFilterObjectSchema),
				z.lazy(() => TipoWhereInputObjectSchema),
			])
			.optional(),
		estado: z
			.union([
				z.lazy(() => EstadoScalarRelationFilterObjectSchema),
				z.lazy(() => EstadoWhereInputObjectSchema),
			])
			.optional(),
	})
	.strict();
export const ConfiguracionWhereInputObjectSchema: z.ZodType<Prisma.ConfiguracionWhereInput> =
	configuracionwhereinputSchema as unknown as z.ZodType<Prisma.ConfiguracionWhereInput>;
export const ConfiguracionWhereInputObjectZodSchema =
	configuracionwhereinputSchema;
