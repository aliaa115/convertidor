import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
			estadoId: z.number().int().optional(),
			marcadores: z.lazy(() => MarcadorUncheckedCreateNestedManyWithoutParrafoInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoUncheckedCreateWithoutComentariosInputObjectSchema: z.ZodType<Prisma.ParrafoUncheckedCreateWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUncheckedCreateWithoutComentariosInput>;
export const ParrafoUncheckedCreateWithoutComentariosInputObjectZodSchema = makeSchema();
