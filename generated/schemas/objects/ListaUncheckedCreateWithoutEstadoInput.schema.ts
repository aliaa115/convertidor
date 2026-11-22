import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroUncheckedCreateNestedManyWithoutListaInputObjectSchema as ListaLibroUncheckedCreateNestedManyWithoutListaInputObjectSchema } from "./ListaLibroUncheckedCreateNestedManyWithoutListaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			privada: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			usuarioId: z.number().int().optional().nullable(),
			libros: z.lazy(() => ListaLibroUncheckedCreateNestedManyWithoutListaInputObjectSchema).optional(),
		})
		.strict();
export const ListaUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUncheckedCreateWithoutEstadoInput>;
export const ListaUncheckedCreateWithoutEstadoInputObjectZodSchema = makeSchema();
