import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			tabla: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
		})
		.strict();
export const TipoUncheckedUpdateManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoUncheckedUpdateManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUncheckedUpdateManyWithoutEstadoInput>;
export const TipoUncheckedUpdateManyWithoutEstadoInputObjectZodSchema = makeSchema();
