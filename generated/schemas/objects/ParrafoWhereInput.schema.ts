import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloScalarRelationFilterObjectSchema as CapituloScalarRelationFilterObjectSchema } from "./CapituloScalarRelationFilter.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";
import { ComentarioListRelationFilterObjectSchema as ComentarioListRelationFilterObjectSchema } from "./ComentarioListRelationFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { MarcadorListRelationFilterObjectSchema as MarcadorListRelationFilterObjectSchema } from "./MarcadorListRelationFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const parrafowhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ParrafoWhereInputObjectSchema),
				z.lazy(() => ParrafoWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ParrafoWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ParrafoWhereInputObjectSchema),
				z.lazy(() => ParrafoWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		contenido: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		indice: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		capituloId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		capitulo: z
			.union([
				z.lazy(() => CapituloScalarRelationFilterObjectSchema),
				z.lazy(() => CapituloWhereInputObjectSchema),
			])
			.optional(),
		estado: z
			.union([
				z.lazy(() => EstadoScalarRelationFilterObjectSchema),
				z.lazy(() => EstadoWhereInputObjectSchema),
			])
			.optional(),
		comentarios: z
			.lazy(() => ComentarioListRelationFilterObjectSchema)
			.optional(),
		marcadores: z.lazy(() => MarcadorListRelationFilterObjectSchema).optional(),
	})
	.strict();
export const ParrafoWhereInputObjectSchema: z.ZodType<Prisma.ParrafoWhereInput> =
	parrafowhereinputSchema as unknown as z.ZodType<Prisma.ParrafoWhereInput>;
export const ParrafoWhereInputObjectZodSchema = parrafowhereinputSchema;
