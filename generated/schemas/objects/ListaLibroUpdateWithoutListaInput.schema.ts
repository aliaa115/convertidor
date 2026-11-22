import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutListaLibrosNestedInput.schema.ts";
import { LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema as LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema } from "./LibroUpdateOneWithoutListaLibrosNestedInput.schema.ts";

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
			libro: z
				.lazy(() => LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema)
				.optional(),
			estado: z
				.lazy(
					() =>
						EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const ListaLibroUpdateWithoutListaInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateWithoutListaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateWithoutListaInput>;
export const ListaLibroUpdateWithoutListaInputObjectZodSchema = makeSchema();
