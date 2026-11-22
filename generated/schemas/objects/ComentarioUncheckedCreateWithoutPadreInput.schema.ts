import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
			tipoId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
			respuestas: z
				.lazy(
					() =>
						ComentarioUncheckedCreateNestedManyWithoutPadreInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const ComentarioUncheckedCreateWithoutPadreInputObjectSchema: z.ZodType<Prisma.ComentarioUncheckedCreateWithoutPadreInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUncheckedCreateWithoutPadreInput>;
export const ComentarioUncheckedCreateWithoutPadreInputObjectZodSchema =
	makeSchema();
