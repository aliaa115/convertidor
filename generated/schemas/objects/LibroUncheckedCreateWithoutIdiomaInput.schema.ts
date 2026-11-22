import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloUncheckedCreateNestedManyWithoutLibroInputObjectSchema as CapituloUncheckedCreateNestedManyWithoutLibroInputObjectSchema } from "./CapituloUncheckedCreateNestedManyWithoutLibroInput.schema.ts";
import { FavoritoUncheckedCreateNestedManyWithoutLibroInputObjectSchema as FavoritoUncheckedCreateNestedManyWithoutLibroInputObjectSchema } from "./FavoritoUncheckedCreateNestedManyWithoutLibroInput.schema.ts";
import { GlosarioUncheckedCreateNestedManyWithoutLibroInputObjectSchema as GlosarioUncheckedCreateNestedManyWithoutLibroInputObjectSchema } from "./GlosarioUncheckedCreateNestedManyWithoutLibroInput.schema.ts";
import { LibroCategoriaUncheckedCreateNestedManyWithoutLibroInputObjectSchema as LibroCategoriaUncheckedCreateNestedManyWithoutLibroInputObjectSchema } from "./LibroCategoriaUncheckedCreateNestedManyWithoutLibroInput.schema.ts";
import { LibroEtiquetaUncheckedCreateNestedManyWithoutLibroInputObjectSchema as LibroEtiquetaUncheckedCreateNestedManyWithoutLibroInputObjectSchema } from "./LibroEtiquetaUncheckedCreateNestedManyWithoutLibroInput.schema.ts";
import { ListaLibroUncheckedCreateNestedManyWithoutLibroInputObjectSchema as ListaLibroUncheckedCreateNestedManyWithoutLibroInputObjectSchema } from "./ListaLibroUncheckedCreateNestedManyWithoutLibroInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			titulo: z.string(),
			resumen: z.string(),
			portada: z.string().optional().nullable(),
			publicado: z.boolean().optional(),
			fechaPublicacion: z.coerce.date().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			tipoId: z.number().int(),
			estadoId: z.number().int().optional(),
			capitulos: z.lazy(() => CapituloUncheckedCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			categorias: z.lazy(() => LibroCategoriaUncheckedCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			etiquetas: z.lazy(() => LibroEtiquetaUncheckedCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			favoritos: z.lazy(() => FavoritoUncheckedCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			glosarios: z.lazy(() => GlosarioUncheckedCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			listaLibros: z.lazy(() => ListaLibroUncheckedCreateNestedManyWithoutLibroInputObjectSchema).optional(),
		})
		.strict();
export const LibroUncheckedCreateWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.LibroUncheckedCreateWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUncheckedCreateWithoutIdiomaInput>;
export const LibroUncheckedCreateWithoutIdiomaInputObjectZodSchema = makeSchema();
