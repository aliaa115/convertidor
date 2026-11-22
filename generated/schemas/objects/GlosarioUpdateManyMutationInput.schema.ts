import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			palabra: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			significado: z
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
		})
		.strict();
export const GlosarioUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateManyMutationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateManyMutationInput>;
export const GlosarioUpdateManyMutationInputObjectZodSchema = makeSchema();
