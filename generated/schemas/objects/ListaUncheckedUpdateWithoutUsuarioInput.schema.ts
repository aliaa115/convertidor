import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { ListaLibroUncheckedUpdateManyWithoutListaNestedInputObjectSchema as ListaLibroUncheckedUpdateManyWithoutListaNestedInputObjectSchema } from "./ListaLibroUncheckedUpdateManyWithoutListaNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			privada: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estadoId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			libros: z.lazy(() => ListaLibroUncheckedUpdateManyWithoutListaNestedInputObjectSchema).optional(),
		})
		.strict();
export const ListaUncheckedUpdateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ListaUncheckedUpdateWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUncheckedUpdateWithoutUsuarioInput>;
export const ListaUncheckedUpdateWithoutUsuarioInputObjectZodSchema = makeSchema();
