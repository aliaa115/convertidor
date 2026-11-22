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
			estadoId: z.number().int().optional(),
			libros: z.lazy(() => ListaLibroUncheckedCreateNestedManyWithoutListaInputObjectSchema).optional(),
		})
		.strict();
export const ListaUncheckedCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ListaUncheckedCreateWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUncheckedCreateWithoutUsuarioInput>;
export const ListaUncheckedCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
