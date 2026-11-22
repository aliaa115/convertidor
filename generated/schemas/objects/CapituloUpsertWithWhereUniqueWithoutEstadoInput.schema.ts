import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCreateWithoutEstadoInputObjectSchema as CapituloCreateWithoutEstadoInputObjectSchema } from "./CapituloCreateWithoutEstadoInput.schema.ts";
import { CapituloUncheckedCreateWithoutEstadoInputObjectSchema as CapituloUncheckedCreateWithoutEstadoInputObjectSchema } from "./CapituloUncheckedCreateWithoutEstadoInput.schema.ts";
import { CapituloUncheckedUpdateWithoutEstadoInputObjectSchema as CapituloUncheckedUpdateWithoutEstadoInputObjectSchema } from "./CapituloUncheckedUpdateWithoutEstadoInput.schema.ts";
import { CapituloUpdateWithoutEstadoInputObjectSchema as CapituloUpdateWithoutEstadoInputObjectSchema } from "./CapituloUpdateWithoutEstadoInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => CapituloUpdateWithoutEstadoInputObjectSchema), z.lazy(() => CapituloUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => CapituloCreateWithoutEstadoInputObjectSchema), z.lazy(() => CapituloUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const CapituloUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CapituloUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpsertWithWhereUniqueWithoutEstadoInput>;
export const CapituloUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
