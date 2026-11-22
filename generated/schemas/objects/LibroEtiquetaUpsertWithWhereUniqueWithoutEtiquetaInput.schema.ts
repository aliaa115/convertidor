import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema as LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedUpdateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUpdateWithoutEtiquetaInputObjectSchema as LibroEtiquetaUpdateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUpdateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LibroEtiquetaUpdateWithoutEtiquetaInputObjectSchema),
				z.lazy(
					() => LibroEtiquetaUncheckedUpdateWithoutEtiquetaInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema),
				z.lazy(
					() => LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput>;
export const LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInputObjectZodSchema =
	makeSchema();
