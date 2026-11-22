import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			nombre: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			url: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const AvatarUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AvatarUncheckedUpdateManyInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarUncheckedUpdateManyInput>;
export const AvatarUncheckedUpdateManyInputObjectZodSchema = makeSchema();
