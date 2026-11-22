import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema as ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { ParrafoUpdateWithoutComentariosInputObjectSchema as ParrafoUpdateWithoutComentariosInputObjectSchema } from "./ParrafoUpdateWithoutComentariosInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => ParrafoUpdateWithoutComentariosInputObjectSchema), z.lazy(() => ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema)]),
		})
		.strict();
export const ParrafoUpdateToOneWithWhereWithoutComentariosInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateToOneWithWhereWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateToOneWithWhereWithoutComentariosInput>;
export const ParrafoUpdateToOneWithWhereWithoutComentariosInputObjectZodSchema = makeSchema();
