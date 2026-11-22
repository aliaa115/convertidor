import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutListaLibrosNestedInput.schema.ts";
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
			estado: z
				.lazy(
					() =>
						EstadoUpdateOneRequiredWithoutListaLibrosNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const ListaLibroUpdateWithoutLibroInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateWithoutLibroInput>;
export const ListaLibroUpdateWithoutLibroInputObjectZodSchema = makeSchema();
