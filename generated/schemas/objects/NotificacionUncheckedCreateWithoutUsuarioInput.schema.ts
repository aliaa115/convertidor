import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
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
export const NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.NotificacionUncheckedCreateWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionUncheckedCreateWithoutUsuarioInput>;
export const NotificacionUncheckedCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
