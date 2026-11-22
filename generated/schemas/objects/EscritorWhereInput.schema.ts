import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { AvatarScalarRelationFilterObjectSchema as AvatarScalarRelationFilterObjectSchema } from "./AvatarScalarRelationFilter.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./AvatarWhereInput.schema.ts";
import { ComentarioListRelationFilterObjectSchema as ComentarioListRelationFilterObjectSchema } from "./ComentarioListRelationFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { FavoritoListRelationFilterObjectSchema as FavoritoListRelationFilterObjectSchema } from "./FavoritoListRelationFilter.schema.ts";
import { GlosarioListRelationFilterObjectSchema as GlosarioListRelationFilterObjectSchema } from "./GlosarioListRelationFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { LibroListRelationFilterObjectSchema as LibroListRelationFilterObjectSchema } from "./LibroListRelationFilter.schema.ts";
import { MarcadorListRelationFilterObjectSchema as MarcadorListRelationFilterObjectSchema } from "./MarcadorListRelationFilter.schema.ts";
import { NotaAutorListRelationFilterObjectSchema as NotaAutorListRelationFilterObjectSchema } from "./NotaAutorListRelationFilter.schema.ts";
import { SeguirUsuarioListRelationFilterObjectSchema as SeguirUsuarioListRelationFilterObjectSchema } from "./SeguirUsuarioListRelationFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";
import { UsuarioNullableScalarRelationFilterObjectSchema as UsuarioNullableScalarRelationFilterObjectSchema } from "./UsuarioNullableScalarRelationFilter.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const escritorwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => EscritorWhereInputObjectSchema),
				z.lazy(() => EscritorWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => EscritorWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => EscritorWhereInputObjectSchema),
				z.lazy(() => EscritorWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		nombres: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		apellidos: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		alias: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		descripcion: z
			.union([
				z.lazy(() => StringNullableFilterObjectSchema),
				z.string().max(255),
			])
			.optional()
			.nullable(),
		fechaNacimiento: z
			.union([
				z.lazy(() => DateTimeNullableFilterObjectSchema),
				z.coerce.date(),
			])
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
		avatarId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		usuario: z
			.union([
				z.lazy(() => UsuarioNullableScalarRelationFilterObjectSchema),
				z.lazy(() => UsuarioWhereInputObjectSchema),
			])
			.optional(),
		avatar: z
			.union([
				z.lazy(() => AvatarScalarRelationFilterObjectSchema),
				z.lazy(() => AvatarWhereInputObjectSchema),
			])
			.optional(),
		estado: z
			.union([
				z.lazy(() => EstadoScalarRelationFilterObjectSchema),
				z.lazy(() => EstadoWhereInputObjectSchema),
			])
			.optional(),
		libros: z.lazy(() => LibroListRelationFilterObjectSchema).optional(),
		comentarios: z
			.lazy(() => ComentarioListRelationFilterObjectSchema)
			.optional(),
		favoritos: z.lazy(() => FavoritoListRelationFilterObjectSchema).optional(),
		glosarios: z.lazy(() => GlosarioListRelationFilterObjectSchema).optional(),
		notasAutor: z
			.lazy(() => NotaAutorListRelationFilterObjectSchema)
			.optional(),
		marcadores: z.lazy(() => MarcadorListRelationFilterObjectSchema).optional(),
		seguidores: z
			.lazy(() => SeguirUsuarioListRelationFilterObjectSchema)
			.optional(),
		siguiendo: z
			.lazy(() => SeguirUsuarioListRelationFilterObjectSchema)
			.optional(),
	})
	.strict();
export const EscritorWhereInputObjectSchema: z.ZodType<Prisma.EscritorWhereInput> =
	escritorwhereinputSchema as unknown as z.ZodType<Prisma.EscritorWhereInput>;
export const EscritorWhereInputObjectZodSchema = escritorwhereinputSchema;
