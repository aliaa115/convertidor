import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from "./UsuarioOrderByWithRelationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			titulo: SortOrderSchema.optional(),
			mensaje: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			tipo: SortOrderSchema.optional(),
			leida: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			entidadId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			entidadTipo: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuario: z.lazy(() => UsuarioOrderByWithRelationInputObjectSchema).optional(),
		})
		.strict();
export const NotificacionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NotificacionOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionOrderByWithRelationInput>;
export const NotificacionOrderByWithRelationInputObjectZodSchema = makeSchema();
