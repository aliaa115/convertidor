import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectSchema as ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedCreateNestedManyWithoutParrafoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			contenido: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			capituloId: z.number().int(),
			estadoId: z.number().int().optional(),
			comentarios: z
				.lazy(
					() =>
						ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.ParrafoUncheckedCreateWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUncheckedCreateWithoutMarcadoresInput>;
export const ParrafoUncheckedCreateWithoutMarcadoresInputObjectZodSchema =
	makeSchema();
