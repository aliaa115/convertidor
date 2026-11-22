import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";
import { UsuarioCreateNestedOneWithoutNotificacionsInputObjectSchema as UsuarioCreateNestedOneWithoutNotificacionsInputObjectSchema } from "./UsuarioCreateNestedOneWithoutNotificacionsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			titulo: z.string(),
			mensaje: z.string().optional().nullable(),
			tipo: NotificacionTipoSchema.optional(),
			leida: z.boolean().optional(),
			entidadId: z.number().int().optional().nullable(),
			entidadTipo: EntidadTipoSchema.optional(),
			createdAt: z.coerce.date().optional(),
			usuario: z.lazy(
				() => UsuarioCreateNestedOneWithoutNotificacionsInputObjectSchema,
			),
		})
		.strict();
export const NotificacionCreateInputObjectSchema: z.ZodType<Prisma.NotificacionCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionCreateInput>;
export const NotificacionCreateInputObjectZodSchema = makeSchema();
