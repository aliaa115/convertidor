import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoUncheckedUpdateWithoutEstadoInputObjectSchema as ParrafoUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ParrafoUpdateWithoutEstadoInputObjectSchema as ParrafoUpdateWithoutEstadoInputObjectSchema } from "./ParrafoUpdateWithoutEstadoInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ParrafoUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ParrafoUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ParrafoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateWithWhereUniqueWithoutEstadoInput>;
export const ParrafoUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
