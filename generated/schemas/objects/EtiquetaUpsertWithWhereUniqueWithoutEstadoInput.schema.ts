import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCreateWithoutEstadoInputObjectSchema as EtiquetaCreateWithoutEstadoInputObjectSchema } from "./EtiquetaCreateWithoutEstadoInput.schema.ts";
import { EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema as EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema } from "./EtiquetaUncheckedCreateWithoutEstadoInput.schema.ts";
import { EtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema as EtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./EtiquetaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { EtiquetaUpdateWithoutEstadoInputObjectSchema as EtiquetaUpdateWithoutEstadoInputObjectSchema } from "./EtiquetaUpdateWithoutEstadoInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./EtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EtiquetaWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => EtiquetaUpdateWithoutEstadoInputObjectSchema), z.lazy(() => EtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => EtiquetaCreateWithoutEstadoInputObjectSchema), z.lazy(() => EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const EtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpsertWithWhereUniqueWithoutEstadoInput>;
export const EtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
