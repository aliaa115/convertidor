import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		})
		.strict();
export const AvatarUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AvatarUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarUpdateManyMutationInput>;
export const AvatarUpdateManyMutationInputObjectZodSchema = makeSchema();
