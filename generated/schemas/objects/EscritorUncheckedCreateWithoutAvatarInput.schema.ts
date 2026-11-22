import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema as ComentarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema } from "./ComentarioUncheckedCreateNestedManyWithoutEscritorInput.schema.ts";
import { FavoritoUncheckedCreateNestedManyWithoutEscritorInputObjectSchema as FavoritoUncheckedCreateNestedManyWithoutEscritorInputObjectSchema } from "./FavoritoUncheckedCreateNestedManyWithoutEscritorInput.schema.ts";
import { GlosarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema as GlosarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema } from "./GlosarioUncheckedCreateNestedManyWithoutEscritorInput.schema.ts";
import { LibroUncheckedCreateNestedManyWithoutEscritorInputObjectSchema as LibroUncheckedCreateNestedManyWithoutEscritorInputObjectSchema } from "./LibroUncheckedCreateNestedManyWithoutEscritorInput.schema.ts";
import { MarcadorUncheckedCreateNestedManyWithoutEscritorInputObjectSchema as MarcadorUncheckedCreateNestedManyWithoutEscritorInputObjectSchema } from "./MarcadorUncheckedCreateNestedManyWithoutEscritorInput.schema.ts";
import { NotaAutorUncheckedCreateNestedManyWithoutEscritorInputObjectSchema as NotaAutorUncheckedCreateNestedManyWithoutEscritorInputObjectSchema } from "./NotaAutorUncheckedCreateNestedManyWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema as SeguirUsuarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUncheckedCreateNestedManyWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUncheckedCreateNestedManyWithoutSeguidoInputObjectSchema as SeguirUsuarioUncheckedCreateNestedManyWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateNestedManyWithoutSeguidoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombres: z.string().optional().nullable(),
			apellidos: z.string().optional().nullable(),
			alias: z.string().optional().nullable(),
			descripcion: z.string().optional().nullable(),
			fechaNacimiento: z.coerce.date().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			usuarioId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
			libros: z
				.lazy(
					() => LibroUncheckedCreateNestedManyWithoutEscritorInputObjectSchema,
				)
				.optional(),
			comentarios: z
				.lazy(
					() =>
						ComentarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema,
				)
				.optional(),
			favoritos: z
				.lazy(
					() =>
						FavoritoUncheckedCreateNestedManyWithoutEscritorInputObjectSchema,
				)
				.optional(),
			glosarios: z
				.lazy(
					() =>
						GlosarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema,
				)
				.optional(),
			notasAutor: z
				.lazy(
					() =>
						NotaAutorUncheckedCreateNestedManyWithoutEscritorInputObjectSchema,
				)
				.optional(),
			marcadores: z
				.lazy(
					() =>
						MarcadorUncheckedCreateNestedManyWithoutEscritorInputObjectSchema,
				)
				.optional(),
			seguidores: z
				.lazy(
					() =>
						SeguirUsuarioUncheckedCreateNestedManyWithoutSeguidoInputObjectSchema,
				)
				.optional(),
			siguiendo: z
				.lazy(
					() =>
						SeguirUsuarioUncheckedCreateNestedManyWithoutEscritorInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const EscritorUncheckedCreateWithoutAvatarInputObjectSchema: z.ZodType<Prisma.EscritorUncheckedCreateWithoutAvatarInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUncheckedCreateWithoutAvatarInput>;
export const EscritorUncheckedCreateWithoutAvatarInputObjectZodSchema =
	makeSchema();
