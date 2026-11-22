import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from "./BoolFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EnumEntidadTipoFilterObjectSchema as EnumEntidadTipoFilterObjectSchema } from "./EnumEntidadTipoFilter.schema.ts";
import { EnumNotificacionTipoFilterObjectSchema as EnumNotificacionTipoFilterObjectSchema } from "./EnumNotificacionTipoFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";
import { UsuarioScalarRelationFilterObjectSchema as UsuarioScalarRelationFilterObjectSchema } from "./UsuarioScalarRelationFilter.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const notificacionwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => NotificacionWhereInputObjectSchema), z.lazy(() => NotificacionWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => NotificacionWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => NotificacionWhereInputObjectSchema), z.lazy(() => NotificacionWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		titulo: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		mensaje: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		tipo: z.union([z.lazy(() => EnumNotificacionTipoFilterObjectSchema), NotificacionTipoSchema]).optional(),
		leida: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
		usuarioId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		entidadId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		entidadTipo: z.union([z.lazy(() => EnumEntidadTipoFilterObjectSchema), EntidadTipoSchema]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		usuario: z.union([z.lazy(() => UsuarioScalarRelationFilterObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema)]).optional(),
	})
	.strict();
export const NotificacionWhereInputObjectSchema: z.ZodType<Prisma.NotificacionWhereInput> = notificacionwhereinputSchema as unknown as z.ZodType<Prisma.NotificacionWhereInput>;
export const NotificacionWhereInputObjectZodSchema = notificacionwhereinputSchema;
