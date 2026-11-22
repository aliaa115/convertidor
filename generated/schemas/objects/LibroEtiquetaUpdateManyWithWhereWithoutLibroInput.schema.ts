import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaScalarWhereInputObjectSchema as LibroEtiquetaScalarWhereInputObjectSchema } from "./LibroEtiquetaScalarWhereInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateManyWithoutLibroInputObjectSchema as LibroEtiquetaUncheckedUpdateManyWithoutLibroInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateManyWithoutLibroInput.schema.ts";
import { LibroEtiquetaUpdateManyMutationInputObjectSchema as LibroEtiquetaUpdateManyMutationInputObjectSchema } from "./LibroEtiquetaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => LibroEtiquetaUpdateManyMutationInputObjectSchema), z.lazy(() => LibroEtiquetaUncheckedUpdateManyWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const LibroEtiquetaUpdateManyWithWhereWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyWithWhereWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyWithWhereWithoutLibroInput>;
export const LibroEtiquetaUpdateManyWithWhereWithoutLibroInputObjectZodSchema = makeSchema();
