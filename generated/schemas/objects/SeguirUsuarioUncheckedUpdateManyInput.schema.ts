import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
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
			escritorId: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			escritorSeguidoId: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			estadoId: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const SeguirUsuarioUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedUpdateManyInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedUpdateManyInput>;
export const SeguirUsuarioUncheckedUpdateManyInputObjectZodSchema =
	makeSchema();
