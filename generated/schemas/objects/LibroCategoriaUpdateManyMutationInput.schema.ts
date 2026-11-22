import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";

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
		})
		.strict();
export const LibroCategoriaUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateManyMutationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateManyMutationInput>;
export const LibroCategoriaUpdateManyMutationInputObjectZodSchema =
	makeSchema();
