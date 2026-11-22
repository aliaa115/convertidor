import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema as EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateNestedOneWithoutLibroEtiquetasInput.schema.ts";
import { EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema as EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema } from "./EtiquetaCreateNestedOneWithoutLibrosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema).optional(),
			etiqueta: z.lazy(() => EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema),
		})
		.strict();
export const LibroEtiquetaCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateWithoutLibroInput>;
export const LibroEtiquetaCreateWithoutLibroInputObjectZodSchema = makeSchema();
