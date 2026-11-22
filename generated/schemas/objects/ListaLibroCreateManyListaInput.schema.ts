import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libroId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ListaLibroCreateManyListaInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateManyListaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateManyListaInput>;
export const ListaLibroCreateManyListaInputObjectZodSchema = makeSchema();
