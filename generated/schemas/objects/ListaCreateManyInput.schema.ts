import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			privada: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			usuarioId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ListaCreateManyInputObjectSchema: z.ZodType<Prisma.ListaCreateManyInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateManyInput>;
export const ListaCreateManyInputObjectZodSchema = makeSchema();
