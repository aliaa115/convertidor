import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";

const makeSchema = () =>
	z
		.object({
			set: EntidadTipoSchema.optional(),
		})
		.strict();
export const EnumEntidadTipoFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumEntidadTipoFieldUpdateOperationsInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EnumEntidadTipoFieldUpdateOperationsInput>;
export const EnumEntidadTipoFieldUpdateOperationsInputObjectZodSchema =
	makeSchema();
