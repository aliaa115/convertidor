import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
			capituloId: z.number().int(),
			comentarios: z.lazy(() => ComentarioUncheckedCreateNestedManyWithoutParrafoInputObjectSchema).optional(),
			marcadores: z.lazy(() => MarcadorUncheckedCreateNestedManyWithoutParrafoInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ParrafoUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUncheckedCreateWithoutEstadoInput>;
export const ParrafoUncheckedCreateWithoutEstadoInputObjectZodSchema = makeSchema();
