import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { AvatarCreateNestedOneWithoutEscritoresInputObjectSchema as AvatarCreateNestedOneWithoutEscritoresInputObjectSchema } from "./AvatarCreateNestedOneWithoutEscritoresInput.schema.ts";
import { ComentarioCreateNestedManyWithoutEscritorInputObjectSchema as ComentarioCreateNestedManyWithoutEscritorInputObjectSchema } from "./ComentarioCreateNestedManyWithoutEscritorInput.schema.ts";
import { EstadoCreateNestedOneWithoutEscritoresInputObjectSchema as EstadoCreateNestedOneWithoutEscritoresInputObjectSchema } from "./EstadoCreateNestedOneWithoutEscritoresInput.schema.ts";
import { FavoritoCreateNestedManyWithoutEscritorInputObjectSchema as FavoritoCreateNestedManyWithoutEscritorInputObjectSchema } from "./FavoritoCreateNestedManyWithoutEscritorInput.schema.ts";
import { GlosarioCreateNestedManyWithoutEscritorInputObjectSchema as GlosarioCreateNestedManyWithoutEscritorInputObjectSchema } from "./GlosarioCreateNestedManyWithoutEscritorInput.schema.ts";
import { LibroCreateNestedManyWithoutEscritorInputObjectSchema as LibroCreateNestedManyWithoutEscritorInputObjectSchema } from "./LibroCreateNestedManyWithoutEscritorInput.schema.ts";
import { MarcadorCreateNestedManyWithoutEscritorInputObjectSchema as MarcadorCreateNestedManyWithoutEscritorInputObjectSchema } from "./MarcadorCreateNestedManyWithoutEscritorInput.schema.ts";
import { NotaAutorCreateNestedManyWithoutEscritorInputObjectSchema as NotaAutorCreateNestedManyWithoutEscritorInputObjectSchema } from "./NotaAutorCreateNestedManyWithoutEscritorInput.schema.ts";
import { SeguirUsuarioCreateNestedManyWithoutEscritorInputObjectSchema as SeguirUsuarioCreateNestedManyWithoutEscritorInputObjectSchema } from "./SeguirUsuarioCreateNestedManyWithoutEscritorInput.schema.ts";
import { SeguirUsuarioCreateNestedManyWithoutSeguidoInputObjectSchema as SeguirUsuarioCreateNestedManyWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioCreateNestedManyWithoutSeguidoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombres: z.string().optional().nullable(),
			apellidos: z.string().optional().nullable(),
			alias: z.string().optional().nullable(),
			descripcion: z.string().max(255).optional().nullable(),
			fechaNacimiento: z.coerce.date().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			avatar: z.lazy(() => AvatarCreateNestedOneWithoutEscritoresInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutEscritoresInputObjectSchema).optional(),
			libros: z.lazy(() => LibroCreateNestedManyWithoutEscritorInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioCreateNestedManyWithoutEscritorInputObjectSchema).optional(),
			favoritos: z.lazy(() => FavoritoCreateNestedManyWithoutEscritorInputObjectSchema).optional(),
			glosarios: z.lazy(() => GlosarioCreateNestedManyWithoutEscritorInputObjectSchema).optional(),
			notasAutor: z.lazy(() => NotaAutorCreateNestedManyWithoutEscritorInputObjectSchema).optional(),
			marcadores: z.lazy(() => MarcadorCreateNestedManyWithoutEscritorInputObjectSchema).optional(),
			seguidores: z.lazy(() => SeguirUsuarioCreateNestedManyWithoutSeguidoInputObjectSchema).optional(),
			siguiendo: z.lazy(() => SeguirUsuarioCreateNestedManyWithoutEscritorInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.EscritorCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateWithoutUsuarioInput>;
export const EscritorCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
