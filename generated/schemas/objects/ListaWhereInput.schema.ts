import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from "./BoolFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { ListaLibroListRelationFilterObjectSchema as ListaLibroListRelationFilterObjectSchema } from "./ListaLibroListRelationFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";
import { UsuarioNullableScalarRelationFilterObjectSchema as UsuarioNullableScalarRelationFilterObjectSchema } from "./UsuarioNullableScalarRelationFilter.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const listawhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ListaWhereInputObjectSchema),
				z.lazy(() => ListaWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ListaWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ListaWhereInputObjectSchema),
				z.lazy(() => ListaWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		nombre: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		privada: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
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
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		usuario: z
			.union([
				z.lazy(() => UsuarioNullableScalarRelationFilterObjectSchema),
				z.lazy(() => UsuarioWhereInputObjectSchema),
			])
			.optional(),
		estado: z
			.union([
				z.lazy(() => EstadoScalarRelationFilterObjectSchema),
				z.lazy(() => EstadoWhereInputObjectSchema),
			])
			.optional(),
		libros: z.lazy(() => ListaLibroListRelationFilterObjectSchema).optional(),
	})
	.strict();
export const ListaWhereInputObjectSchema: z.ZodType<Prisma.ListaWhereInput> =
	listawhereinputSchema as unknown as z.ZodType<Prisma.ListaWhereInput>;
export const ListaWhereInputObjectZodSchema = listawhereinputSchema;
