import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			listaId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ListaLibroUncheckedCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.ListaLibroUncheckedCreateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUncheckedCreateWithoutLibroInput>;
export const ListaLibroUncheckedCreateWithoutLibroInputObjectZodSchema =
	makeSchema();
