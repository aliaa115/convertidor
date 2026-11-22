import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaScalarWhereInputObjectSchema as LibroEtiquetaScalarWhereInputObjectSchema } from "./LibroEtiquetaScalarWhereInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateManyWithoutEstadoInputObjectSchema as LibroEtiquetaUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUpdateManyMutationInputObjectSchema as LibroEtiquetaUpdateManyMutationInputObjectSchema } from "./LibroEtiquetaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => LibroEtiquetaUpdateManyMutationInputObjectSchema), z.lazy(() => LibroEtiquetaUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const LibroEtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyWithWhereWithoutEstadoInput>;
export const LibroEtiquetaUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
