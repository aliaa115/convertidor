import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaCreateWithoutLibroInputObjectSchema as LibroEtiquetaCreateWithoutLibroInputObjectSchema } from "./LibroEtiquetaCreateWithoutLibroInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutLibroInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateWithoutLibroInputObjectSchema as LibroEtiquetaUncheckedUpdateWithoutLibroInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateWithoutLibroInput.schema.ts";
import { LibroEtiquetaUpdateWithoutLibroInputObjectSchema as LibroEtiquetaUpdateWithoutLibroInputObjectSchema } from "./LibroEtiquetaUpdateWithoutLibroInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => LibroEtiquetaUpdateWithoutLibroInputObjectSchema), z.lazy(() => LibroEtiquetaUncheckedUpdateWithoutLibroInputObjectSchema)]),
			create: z.union([z.lazy(() => LibroEtiquetaCreateWithoutLibroInputObjectSchema), z.lazy(() => LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInput>;
export const LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInputObjectZodSchema = makeSchema();
