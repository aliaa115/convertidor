import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUncheckedCreateNestedManyWithoutPadreInputObjectSchema as ComentarioUncheckedCreateNestedManyWithoutPadreInputObjectSchema } from "./ComentarioUncheckedCreateNestedManyWithoutPadreInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			contenido: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			parrafoId: z.number().int(),
			comentarioPadreId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
			respuestas: z.lazy(() => ComentarioUncheckedCreateNestedManyWithoutPadreInputObjectSchema).optional(),
		})
		.strict();
export const ComentarioUncheckedCreateWithoutTipoInputObjectSchema: z.ZodType<Prisma.ComentarioUncheckedCreateWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUncheckedCreateWithoutTipoInput>;
export const ComentarioUncheckedCreateWithoutTipoInputObjectZodSchema = makeSchema();
