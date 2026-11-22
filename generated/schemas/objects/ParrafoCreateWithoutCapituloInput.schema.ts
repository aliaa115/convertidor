import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateNestedManyWithoutParrafoInputObjectSchema as ComentarioCreateNestedManyWithoutParrafoInputObjectSchema } from "./ComentarioCreateNestedManyWithoutParrafoInput.schema.ts";
import { EstadoCreateNestedOneWithoutParrafosInputObjectSchema as EstadoCreateNestedOneWithoutParrafosInputObjectSchema } from "./EstadoCreateNestedOneWithoutParrafosInput.schema.ts";
import { MarcadorCreateNestedManyWithoutParrafoInputObjectSchema as MarcadorCreateNestedManyWithoutParrafoInputObjectSchema } from "./MarcadorCreateNestedManyWithoutParrafoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			contenido: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutParrafosInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioCreateNestedManyWithoutParrafoInputObjectSchema)
				.optional(),
			marcadores: z
				.lazy(() => MarcadorCreateNestedManyWithoutParrafoInputObjectSchema)
				.optional(),
		})
		.strict();
export const ParrafoCreateWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoCreateWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateWithoutCapituloInput>;
export const ParrafoCreateWithoutCapituloInputObjectZodSchema = makeSchema();
