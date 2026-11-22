import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaUncheckedUpdateWithoutLibroInputObjectSchema as LibroEtiquetaUncheckedUpdateWithoutLibroInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateWithoutLibroInput.schema.ts";
import { LibroEtiquetaUpdateWithoutLibroInputObjectSchema as LibroEtiquetaUpdateWithoutLibroInputObjectSchema } from "./LibroEtiquetaUpdateWithoutLibroInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => LibroEtiquetaUpdateWithoutLibroInputObjectSchema),
				z.lazy(() => LibroEtiquetaUncheckedUpdateWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInput>;
export const LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInputObjectZodSchema =
	makeSchema();
