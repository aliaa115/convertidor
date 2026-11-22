import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { EnumEntidadTipoWithAggregatesFilterObjectSchema as EnumEntidadTipoWithAggregatesFilterObjectSchema } from "./EnumEntidadTipoWithAggregatesFilter.schema.ts";
import { EnumNotificacionTipoWithAggregatesFilterObjectSchema as EnumNotificacionTipoWithAggregatesFilterObjectSchema } from "./EnumNotificacionTipoWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema.ts";

const notificacionscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => NotificacionScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => NotificacionScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => NotificacionScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => NotificacionScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => NotificacionScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		titulo: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		mensaje: z
			.union([
				z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
				z.string(),
			])
			.optional()
			.nullable(),
		tipo: z
			.union([
				z.lazy(() => EnumNotificacionTipoWithAggregatesFilterObjectSchema),
				NotificacionTipoSchema,
			])
			.optional(),
		leida: z
			.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
			.optional(),
		usuarioId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		entidadId: z
			.union([
				z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional()
			.nullable(),
		entidadTipo: z
			.union([
				z.lazy(() => EnumEntidadTipoWithAggregatesFilterObjectSchema),
				EntidadTipoSchema,
			])
			.optional(),
		createdAt: z
			.union([
				z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
				z.coerce.date(),
			])
			.optional(),
		updatedAt: z
			.union([
				z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
				z.coerce.date(),
			])
			.optional(),
	})
	.strict();
export const NotificacionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NotificacionScalarWhereWithAggregatesInput> =
	notificacionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.NotificacionScalarWhereWithAggregatesInput>;
export const NotificacionScalarWhereWithAggregatesInputObjectZodSchema =
	notificacionscalarwherewithaggregatesinputSchema;
