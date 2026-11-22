import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema as EscritorUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema } from "./EscritorUncheckedUpdateManyWithoutAvatarNestedInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			escritores: z.lazy(() => EscritorUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema).optional(),
		})
		.strict();
export const AvatarUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AvatarUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarUncheckedUpdateInput>;
export const AvatarUncheckedUpdateInputObjectZodSchema = makeSchema();
