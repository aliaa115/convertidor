import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./UsuarioArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			titulo: z.boolean().optional(),
			mensaje: z.boolean().optional(),
			tipo: z.boolean().optional(),
			leida: z.boolean().optional(),
			usuarioId: z.boolean().optional(),
			usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
			entidadId: z.boolean().optional(),
			entidadTipo: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
		})
		.strict();
export const NotificacionSelectObjectSchema: z.ZodType<Prisma.NotificacionSelect> = makeSchema() as unknown as z.ZodType<Prisma.NotificacionSelect>;
export const NotificacionSelectObjectZodSchema = makeSchema();
