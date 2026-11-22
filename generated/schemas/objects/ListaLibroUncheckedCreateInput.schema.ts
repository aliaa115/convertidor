import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			listaId: z.number().int().optional().nullable(),
			libroId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ListaLibroUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ListaLibroUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUncheckedCreateInput>;
export const ListaLibroUncheckedCreateInputObjectZodSchema = makeSchema();
