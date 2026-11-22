import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutListasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutListasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutListasNestedInput.schema.ts";
import { ListaLibroUpdateManyWithoutListaNestedInputObjectSchema as ListaLibroUpdateManyWithoutListaNestedInputObjectSchema } from "./ListaLibroUpdateManyWithoutListaNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { UsuarioUpdateOneWithoutListasNestedInputObjectSchema as UsuarioUpdateOneWithoutListasNestedInputObjectSchema } from "./UsuarioUpdateOneWithoutListasNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			privada: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			usuario: z.lazy(() => UsuarioUpdateOneWithoutListasNestedInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutListasNestedInputObjectSchema).optional(),
			libros: z.lazy(() => ListaLibroUpdateManyWithoutListaNestedInputObjectSchema).optional(),
		})
		.strict();
export const ListaUpdateInputObjectSchema: z.ZodType<Prisma.ListaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateInput>;
export const ListaUpdateInputObjectZodSchema = makeSchema();
