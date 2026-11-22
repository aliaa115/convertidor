import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";

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
			updatedAt: z.coerce.date().optional(),
		})
		.strict();
export const NotificacionCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.NotificacionCreateWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionCreateWithoutUsuarioInput>;
export const NotificacionCreateWithoutUsuarioInputObjectZodSchema =
	makeSchema();
