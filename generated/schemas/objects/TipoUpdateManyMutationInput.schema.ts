import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			tabla: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
		})
		.strict();
export const TipoUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TipoUpdateManyMutationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateManyMutationInput>;
export const TipoUpdateManyMutationInputObjectZodSchema = makeSchema();
