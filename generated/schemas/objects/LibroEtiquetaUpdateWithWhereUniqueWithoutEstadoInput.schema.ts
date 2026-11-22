import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema as LibroEtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUpdateWithoutEstadoInputObjectSchema as LibroEtiquetaUpdateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUpdateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => LibroEtiquetaUpdateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => LibroEtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInput>;
export const LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
