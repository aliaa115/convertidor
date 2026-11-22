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
			capituloId: z.number().int(),
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
export const ParrafoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ParrafoUncheckedCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUncheckedCreateInput>;
export const ParrafoUncheckedCreateInputObjectZodSchema = makeSchema();
