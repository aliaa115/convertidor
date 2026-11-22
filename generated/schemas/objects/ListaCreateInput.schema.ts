import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutListasInputObjectSchema as EstadoCreateNestedOneWithoutListasInputObjectSchema } from "./EstadoCreateNestedOneWithoutListasInput.schema.ts";
import { ListaLibroCreateNestedManyWithoutListaInputObjectSchema as ListaLibroCreateNestedManyWithoutListaInputObjectSchema } from "./ListaLibroCreateNestedManyWithoutListaInput.schema.ts";
import { UsuarioCreateNestedOneWithoutListasInputObjectSchema as UsuarioCreateNestedOneWithoutListasInputObjectSchema } from "./UsuarioCreateNestedOneWithoutListasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			privada: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			usuario: z.lazy(() => UsuarioCreateNestedOneWithoutListasInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutListasInputObjectSchema).optional(),
			libros: z.lazy(() => ListaLibroCreateNestedManyWithoutListaInputObjectSchema).optional(),
		})
		.strict();
export const ListaCreateInputObjectSchema: z.ZodType<Prisma.ListaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaCreateInput>;
export const ListaCreateInputObjectZodSchema = makeSchema();
