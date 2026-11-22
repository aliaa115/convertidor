import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EscritorScalarRelationFilterObjectSchema as EscritorScalarRelationFilterObjectSchema } from "./EscritorScalarRelationFilter.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";

const seguirusuariowhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => SeguirUsuarioWhereInputObjectSchema),
				z.lazy(() => SeguirUsuarioWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => SeguirUsuarioWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SeguirUsuarioWhereInputObjectSchema),
				z.lazy(() => SeguirUsuarioWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		escritorId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		escritorSeguidoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		escritor: z
			.union([
				z.lazy(() => EscritorScalarRelationFilterObjectSchema),
				z.lazy(() => EscritorWhereInputObjectSchema),
			])
			.optional(),
		seguido: z
			.union([
				z.lazy(() => EscritorScalarRelationFilterObjectSchema),
				z.lazy(() => EscritorWhereInputObjectSchema),
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
export const SeguirUsuarioWhereInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioWhereInput> =
	seguirusuariowhereinputSchema as unknown as z.ZodType<Prisma.SeguirUsuarioWhereInput>;
export const SeguirUsuarioWhereInputObjectZodSchema =
	seguirusuariowhereinputSchema;
