import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutListaLibrosNestedInput.schema.ts";
import { LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema as LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema } from "./LibroUpdateOneWithoutListaLibrosNestedInput.schema.ts";
import { ListaUpdateOneWithoutLibrosNestedInputObjectSchema as ListaUpdateOneWithoutLibrosNestedInputObjectSchema } from "./ListaUpdateOneWithoutLibrosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			lista: z.lazy(() => ListaUpdateOneWithoutLibrosNestedInputObjectSchema).optional(),
			libro: z.lazy(() => LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema).optional(),
		})
		.strict();
export const ListaLibroUpdateInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateInput>;
export const ListaLibroUpdateInputObjectZodSchema = makeSchema();
