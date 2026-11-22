import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			listaId: z.number().int().optional().nullable(),
			libroId: z.number().int().optional().nullable(),
		})
		.strict();
export const ListaLibroCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateManyEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateManyEstadoInput>;
export const ListaLibroCreateManyEstadoInputObjectZodSchema = makeSchema();
