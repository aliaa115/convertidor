import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema as ComentarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutEscritorNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { FavoritoUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema as FavoritoUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema } from "./FavoritoUncheckedUpdateManyWithoutEscritorNestedInput.schema.ts";
import { GlosarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema as GlosarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema } from "./GlosarioUncheckedUpdateManyWithoutEscritorNestedInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { LibroUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema as LibroUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema } from "./LibroUncheckedUpdateManyWithoutEscritorNestedInput.schema.ts";
import { MarcadorUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema as MarcadorUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema } from "./MarcadorUncheckedUpdateManyWithoutEscritorNestedInput.schema.ts";
import { NotaAutorUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema as NotaAutorUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema } from "./NotaAutorUncheckedUpdateManyWithoutEscritorNestedInput.schema.ts";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema.ts";
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema as SeguirUsuarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateManyWithoutEscritorNestedInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateManyWithoutSeguidoNestedInputObjectSchema as SeguirUsuarioUncheckedUpdateManyWithoutSeguidoNestedInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateManyWithoutSeguidoNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			nombres: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			apellidos: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			alias: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			descripcion: z
				.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			fechaNacimiento: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			usuarioId: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			avatarId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			estadoId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			libros: z.lazy(() => LibroUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema).optional(),
			favoritos: z.lazy(() => FavoritoUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema).optional(),
			glosarios: z.lazy(() => GlosarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema).optional(),
			notasAutor: z.lazy(() => NotaAutorUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema).optional(),
			marcadores: z.lazy(() => MarcadorUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema).optional(),
			seguidores: z.lazy(() => SeguirUsuarioUncheckedUpdateManyWithoutSeguidoNestedInputObjectSchema).optional(),
			siguiendo: z.lazy(() => SeguirUsuarioUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.EscritorUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EscritorUncheckedUpdateInput>;
export const EscritorUncheckedUpdateInputObjectZodSchema = makeSchema();
