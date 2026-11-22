import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema as LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema } from "./LibroUpdateOneWithoutListaLibrosNestedInput.schema.ts";
import { ListaUpdateOneWithoutLibrosNestedInputObjectSchema as ListaUpdateOneWithoutLibrosNestedInputObjectSchema } from "./ListaUpdateOneWithoutLibrosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
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
			lista: z
				.lazy(() => ListaUpdateOneWithoutLibrosNestedInputObjectSchema)
				.optional(),
			libro: z
				.lazy(() => LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema)
				.optional(),
		})
		.strict();
export const ListaLibroUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateWithoutEstadoInput>;
export const ListaLibroUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
