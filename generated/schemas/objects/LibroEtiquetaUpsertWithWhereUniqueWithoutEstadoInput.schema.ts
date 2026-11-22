import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaCreateWithoutEstadoInputObjectSchema as LibroEtiquetaCreateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaCreateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema as LibroEtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUpdateWithoutEstadoInputObjectSchema as LibroEtiquetaUpdateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUpdateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => LibroEtiquetaUpdateWithoutEstadoInputObjectSchema), z.lazy(() => LibroEtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => LibroEtiquetaCreateWithoutEstadoInputObjectSchema), z.lazy(() => LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInput>;
export const LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
