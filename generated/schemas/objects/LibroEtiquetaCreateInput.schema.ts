import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema as EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateNestedOneWithoutLibroEtiquetasInput.schema.ts";
import { EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema as EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema } from "./EtiquetaCreateNestedOneWithoutLibrosInput.schema.ts";
import { LibroCreateNestedOneWithoutEtiquetasInputObjectSchema as LibroCreateNestedOneWithoutEtiquetasInputObjectSchema } from "./LibroCreateNestedOneWithoutEtiquetasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			estado: z.lazy(
				() => EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema,
			),
			libro: z.lazy(
				() => LibroCreateNestedOneWithoutEtiquetasInputObjectSchema,
			),
			etiqueta: z.lazy(
				() => EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema,
			),
		})
		.strict();
export const LibroEtiquetaCreateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateInput>;
export const LibroEtiquetaCreateInputObjectZodSchema = makeSchema();
