import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroCreateNestedManyWithoutListaInputObjectSchema as ListaLibroCreateNestedManyWithoutListaInputObjectSchema } from "./ListaLibroCreateNestedManyWithoutListaInput.schema.ts";
import { UsuarioCreateNestedOneWithoutListasInputObjectSchema as UsuarioCreateNestedOneWithoutListasInputObjectSchema } from "./UsuarioCreateNestedOneWithoutListasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			privada: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			usuario: z
				.lazy(() => UsuarioCreateNestedOneWithoutListasInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => ListaLibroCreateNestedManyWithoutListaInputObjectSchema)
				.optional(),
		})
		.strict();
export const ListaCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateWithoutEstadoInput>;
export const ListaCreateWithoutEstadoInputObjectZodSchema = makeSchema();
