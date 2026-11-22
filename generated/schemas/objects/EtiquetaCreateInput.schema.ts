import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutEtiquetasInputObjectSchema as EstadoCreateNestedOneWithoutEtiquetasInputObjectSchema } from "./EstadoCreateNestedOneWithoutEtiquetasInput.schema.ts";
import { LibroEtiquetaCreateNestedManyWithoutEtiquetaInputObjectSchema as LibroEtiquetaCreateNestedManyWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateNestedManyWithoutEtiquetaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutEtiquetasInputObjectSchema).optional(),
			libros: z.lazy(() => LibroEtiquetaCreateNestedManyWithoutEtiquetaInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaCreateInputObjectSchema: z.ZodType<Prisma.EtiquetaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCreateInput>;
export const EtiquetaCreateInputObjectZodSchema = makeSchema();
