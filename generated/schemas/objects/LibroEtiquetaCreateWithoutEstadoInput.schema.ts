import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema as EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema } from "./EtiquetaCreateNestedOneWithoutLibrosInput.schema.ts";
import { LibroCreateNestedOneWithoutEtiquetasInputObjectSchema as LibroCreateNestedOneWithoutEtiquetasInputObjectSchema } from "./LibroCreateNestedOneWithoutEtiquetasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libro: z.lazy(() => LibroCreateNestedOneWithoutEtiquetasInputObjectSchema),
			etiqueta: z.lazy(() => EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema),
		})
		.strict();
export const LibroEtiquetaCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateWithoutEstadoInput>;
export const LibroEtiquetaCreateWithoutEstadoInputObjectZodSchema = makeSchema();
