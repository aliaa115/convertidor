import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaUncheckedUpdateWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedUpdateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUpdateWithoutEtiquetaInputObjectSchema as LibroEtiquetaUpdateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUpdateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => LibroEtiquetaUpdateWithoutEtiquetaInputObjectSchema), z.lazy(() => LibroEtiquetaUncheckedUpdateWithoutEtiquetaInputObjectSchema)]),
		})
		.strict();
export const LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput>;
export const LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInputObjectZodSchema = makeSchema();
