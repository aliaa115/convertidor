import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectSchema as ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedCreateNestedManyWithoutParrafoInput.schema.ts";
import { MarcadorUncheckedCreateNestedManyWithoutParrafoInputObjectSchema as MarcadorUncheckedCreateNestedManyWithoutParrafoInputObjectSchema } from "./MarcadorUncheckedCreateNestedManyWithoutParrafoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			contenido: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
			comentarios: z
				.lazy(
					() =>
						ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectSchema,
				)
				.optional(),
			marcadores: z
				.lazy(
					() =>
						MarcadorUncheckedCreateNestedManyWithoutParrafoInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const ParrafoUncheckedCreateWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoUncheckedCreateWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUncheckedCreateWithoutCapituloInput>;
export const ParrafoUncheckedCreateWithoutCapituloInputObjectZodSchema =
	makeSchema();
