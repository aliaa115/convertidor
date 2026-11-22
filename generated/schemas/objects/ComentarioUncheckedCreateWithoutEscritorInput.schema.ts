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
			parrafoId: z.number().int(),
			comentarioPadreId: z.number().int().optional().nullable(),
			tipoId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
			respuestas: z.lazy(() => ComentarioUncheckedCreateNestedManyWithoutPadreInputObjectSchema).optional(),
		})
		.strict();
export const ComentarioUncheckedCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioUncheckedCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUncheckedCreateWithoutEscritorInput>;
export const ComentarioUncheckedCreateWithoutEscritorInputObjectZodSchema = makeSchema();
