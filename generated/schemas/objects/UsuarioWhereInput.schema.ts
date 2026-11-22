import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionNullableScalarRelationFilterObjectSchema as ConfiguracionNullableScalarRelationFilterObjectSchema } from "./ConfiguracionNullableScalarRelationFilter.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./ConfiguracionWhereInput.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EscritorNullableScalarRelationFilterObjectSchema as EscritorNullableScalarRelationFilterObjectSchema } from "./EscritorNullableScalarRelationFilter.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { ListaListRelationFilterObjectSchema as ListaListRelationFilterObjectSchema } from "./ListaListRelationFilter.schema.ts";
import { NotificacionListRelationFilterObjectSchema as NotificacionListRelationFilterObjectSchema } from "./NotificacionListRelationFilter.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";

const usuariowhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => UsuarioWhereInputObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => UsuarioWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => UsuarioWhereInputObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		userName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		nivel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estado: z.union([z.lazy(() => EstadoScalarRelationFilterObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema)]).optional(),
		configuracion: z.union([z.lazy(() => ConfiguracionNullableScalarRelationFilterObjectSchema), z.lazy(() => ConfiguracionWhereInputObjectSchema)]).optional(),
		escritor: z.union([z.lazy(() => EscritorNullableScalarRelationFilterObjectSchema), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
		listas: z.lazy(() => ListaListRelationFilterObjectSchema).optional(),
		notificacions: z.lazy(() => NotificacionListRelationFilterObjectSchema).optional(),
	})
	.strict();
export const UsuarioWhereInputObjectSchema: z.ZodType<Prisma.UsuarioWhereInput> = usuariowhereinputSchema as unknown as z.ZodType<Prisma.UsuarioWhereInput>;
export const UsuarioWhereInputObjectZodSchema = usuariowhereinputSchema;
