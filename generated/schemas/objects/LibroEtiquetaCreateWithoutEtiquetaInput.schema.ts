import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema as EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateNestedOneWithoutLibroEtiquetasInput.schema.ts";
import { LibroCreateNestedOneWithoutEtiquetasInputObjectSchema as LibroCreateNestedOneWithoutEtiquetasInputObjectSchema } from "./LibroCreateNestedOneWithoutEtiquetasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutLibroEtiquetasInputObjectSchema)
				.optional(),
			libro: z.lazy(
				() => LibroCreateNestedOneWithoutEtiquetasInputObjectSchema,
			),
		})
		.strict();
export const LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateWithoutEtiquetaInput>;
export const LibroEtiquetaCreateWithoutEtiquetaInputObjectZodSchema =
	makeSchema();
