import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { AvatarUpdateOneRequiredWithoutEscritoresNestedInputObjectSchema as AvatarUpdateOneRequiredWithoutEscritoresNestedInputObjectSchema } from "./AvatarUpdateOneRequiredWithoutEscritoresNestedInput.schema.ts";
import { ComentarioUpdateManyWithoutEscritorNestedInputObjectSchema as ComentarioUpdateManyWithoutEscritorNestedInputObjectSchema } from "./ComentarioUpdateManyWithoutEscritorNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutEscritoresNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutEscritoresNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutEscritoresNestedInput.schema.ts";
import { FavoritoUpdateManyWithoutEscritorNestedInputObjectSchema as FavoritoUpdateManyWithoutEscritorNestedInputObjectSchema } from "./FavoritoUpdateManyWithoutEscritorNestedInput.schema.ts";
import { GlosarioUpdateManyWithoutEscritorNestedInputObjectSchema as GlosarioUpdateManyWithoutEscritorNestedInputObjectSchema } from "./GlosarioUpdateManyWithoutEscritorNestedInput.schema.ts";
import { LibroUpdateManyWithoutEscritorNestedInputObjectSchema as LibroUpdateManyWithoutEscritorNestedInputObjectSchema } from "./LibroUpdateManyWithoutEscritorNestedInput.schema.ts";
import { MarcadorUpdateManyWithoutEscritorNestedInputObjectSchema as MarcadorUpdateManyWithoutEscritorNestedInputObjectSchema } from "./MarcadorUpdateManyWithoutEscritorNestedInput.schema.ts";
import { NotaAutorUpdateManyWithoutEscritorNestedInputObjectSchema as NotaAutorUpdateManyWithoutEscritorNestedInputObjectSchema } from "./NotaAutorUpdateManyWithoutEscritorNestedInput.schema.ts";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { SeguirUsuarioUpdateManyWithoutSeguidoNestedInputObjectSchema as SeguirUsuarioUpdateManyWithoutSeguidoNestedInputObjectSchema } from "./SeguirUsuarioUpdateManyWithoutSeguidoNestedInput.schema.ts";
import { UsuarioUpdateOneWithoutEscritorNestedInputObjectSchema as UsuarioUpdateOneWithoutEscritorNestedInputObjectSchema } from "./UsuarioUpdateOneWithoutEscritorNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombres: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			apellidos: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			alias: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			descripcion: z
				.union([
					z.string().max(255),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			fechaNacimiento: z
				.union([
					z.coerce.date(),
					z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			createdAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			updatedAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			usuario: z
				.lazy(() => UsuarioUpdateOneWithoutEscritorNestedInputObjectSchema)
				.optional(),
			avatar: z
				.lazy(
					() => AvatarUpdateOneRequiredWithoutEscritoresNestedInputObjectSchema,
				)
				.optional(),
			estado: z
				.lazy(
					() => EstadoUpdateOneRequiredWithoutEscritoresNestedInputObjectSchema,
				)
				.optional(),
			libros: z
				.lazy(() => LibroUpdateManyWithoutEscritorNestedInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioUpdateManyWithoutEscritorNestedInputObjectSchema)
				.optional(),
			favoritos: z
				.lazy(() => FavoritoUpdateManyWithoutEscritorNestedInputObjectSchema)
				.optional(),
			glosarios: z
				.lazy(() => GlosarioUpdateManyWithoutEscritorNestedInputObjectSchema)
				.optional(),
			notasAutor: z
				.lazy(() => NotaAutorUpdateManyWithoutEscritorNestedInputObjectSchema)
				.optional(),
			marcadores: z
				.lazy(() => MarcadorUpdateManyWithoutEscritorNestedInputObjectSchema)
				.optional(),
			seguidores: z
				.lazy(
					() => SeguirUsuarioUpdateManyWithoutSeguidoNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const EscritorUpdateWithoutSiguiendoInputObjectSchema: z.ZodType<Prisma.EscritorUpdateWithoutSiguiendoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateWithoutSiguiendoInput>;
export const EscritorUpdateWithoutSiguiendoInputObjectZodSchema = makeSchema();
