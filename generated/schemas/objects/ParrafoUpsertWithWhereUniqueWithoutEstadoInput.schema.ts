import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateWithoutEstadoInputObjectSchema as ParrafoCreateWithoutEstadoInputObjectSchema } from "./ParrafoCreateWithoutEstadoInput.schema.ts";
import { ParrafoUncheckedCreateWithoutEstadoInputObjectSchema as ParrafoUncheckedCreateWithoutEstadoInputObjectSchema } from "./ParrafoUncheckedCreateWithoutEstadoInput.schema.ts";
import { ParrafoUncheckedUpdateWithoutEstadoInputObjectSchema as ParrafoUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ParrafoUpdateWithoutEstadoInputObjectSchema as ParrafoUpdateWithoutEstadoInputObjectSchema } from "./ParrafoUpdateWithoutEstadoInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ParrafoUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ParrafoUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => ParrafoCreateWithoutEstadoInputObjectSchema), z.lazy(() => ParrafoUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ParrafoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ParrafoUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpsertWithWhereUniqueWithoutEstadoInput>;
export const ParrafoUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
