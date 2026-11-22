import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateNestedOneWithoutParrafosInputObjectSchema as CapituloCreateNestedOneWithoutParrafosInputObjectSchema } from "./CapituloCreateNestedOneWithoutParrafosInput.schema.ts";
import { ComentarioCreateNestedManyWithoutParrafoInputObjectSchema as ComentarioCreateNestedManyWithoutParrafoInputObjectSchema } from "./ComentarioCreateNestedManyWithoutParrafoInput.schema.ts";
import { EstadoCreateNestedOneWithoutParrafosInputObjectSchema as EstadoCreateNestedOneWithoutParrafosInputObjectSchema } from "./EstadoCreateNestedOneWithoutParrafosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			contenido: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			capitulo: z.lazy(
				() => CapituloCreateNestedOneWithoutParrafosInputObjectSchema,
			),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutParrafosInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioCreateNestedManyWithoutParrafoInputObjectSchema)
				.optional(),
		})
		.strict();
export const ParrafoCreateWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.ParrafoCreateWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateWithoutMarcadoresInput>;
export const ParrafoCreateWithoutMarcadoresInputObjectZodSchema = makeSchema();
