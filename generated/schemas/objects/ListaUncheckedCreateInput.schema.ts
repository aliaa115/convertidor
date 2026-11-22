import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroUncheckedCreateNestedManyWithoutListaInputObjectSchema as ListaLibroUncheckedCreateNestedManyWithoutListaInputObjectSchema } from "./ListaLibroUncheckedCreateNestedManyWithoutListaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			privada: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			usuarioId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
			libros: z
				.lazy(
					() =>
						ListaLibroUncheckedCreateNestedManyWithoutListaInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const ListaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ListaUncheckedCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUncheckedCreateInput>;
export const ListaUncheckedCreateInputObjectZodSchema = makeSchema();
