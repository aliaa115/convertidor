import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaCreateWithoutLibroInputObjectSchema as LibroEtiquetaCreateWithoutLibroInputObjectSchema } from "./LibroEtiquetaCreateWithoutLibroInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutLibroInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroEtiquetaCreateWithoutLibroInputObjectSchema),
				z.lazy(() => LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateOrConnectWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateOrConnectWithoutLibroInput>;
export const LibroEtiquetaCreateOrConnectWithoutLibroInputObjectZodSchema =
	makeSchema();
