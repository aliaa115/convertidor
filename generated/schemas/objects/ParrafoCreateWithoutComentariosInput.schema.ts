import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateNestedOneWithoutParrafosInputObjectSchema as CapituloCreateNestedOneWithoutParrafosInputObjectSchema } from "./CapituloCreateNestedOneWithoutParrafosInput.schema.ts";
import { EstadoCreateNestedOneWithoutParrafosInputObjectSchema as EstadoCreateNestedOneWithoutParrafosInputObjectSchema } from "./EstadoCreateNestedOneWithoutParrafosInput.schema.ts";
import { MarcadorCreateNestedManyWithoutParrafoInputObjectSchema as MarcadorCreateNestedManyWithoutParrafoInputObjectSchema } from "./MarcadorCreateNestedManyWithoutParrafoInput.schema.ts";

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
			marcadores: z
				.lazy(() => MarcadorCreateNestedManyWithoutParrafoInputObjectSchema)
				.optional(),
		})
		.strict();
export const ParrafoCreateWithoutComentariosInputObjectSchema: z.ZodType<Prisma.ParrafoCreateWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateWithoutComentariosInput>;
export const ParrafoCreateWithoutComentariosInputObjectZodSchema = makeSchema();
