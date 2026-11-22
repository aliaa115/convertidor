import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaScalarWhereInputObjectSchema as LibroEtiquetaScalarWhereInputObjectSchema } from "./LibroEtiquetaScalarWhereInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateManyWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedUpdateManyWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateManyWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUpdateManyMutationInputObjectSchema as LibroEtiquetaUpdateManyMutationInputObjectSchema } from "./LibroEtiquetaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => LibroEtiquetaUpdateManyMutationInputObjectSchema),
				z.lazy(
					() =>
						LibroEtiquetaUncheckedUpdateManyWithoutEtiquetaInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInput>;
export const LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInputObjectZodSchema =
	makeSchema();
