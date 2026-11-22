import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorUpdateManyWithoutAvatarNestedInputObjectSchema as EscritorUpdateManyWithoutAvatarNestedInputObjectSchema } from "./EscritorUpdateManyWithoutAvatarNestedInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			escritores: z.lazy(() => EscritorUpdateManyWithoutAvatarNestedInputObjectSchema).optional(),
		})
		.strict();
export const AvatarUpdateInputObjectSchema: z.ZodType<Prisma.AvatarUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarUpdateInput>;
export const AvatarUpdateInputObjectZodSchema = makeSchema();
