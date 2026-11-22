import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutNotasAutorNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutNotasAutorNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			texto: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
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
			escritor: z
				.lazy(
					() =>
						EscritorUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema,
				)
				.optional(),
			estado: z
				.lazy(
					() => EstadoUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const NotaAutorUpdateWithoutCapituloInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateWithoutCapituloInput>;
export const NotaAutorUpdateWithoutCapituloInputObjectZodSchema = makeSchema();
