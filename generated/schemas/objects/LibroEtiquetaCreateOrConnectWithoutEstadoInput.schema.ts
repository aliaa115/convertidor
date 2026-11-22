import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaCreateWithoutEstadoInputObjectSchema as LibroEtiquetaCreateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaCreateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroEtiquetaCreateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroEtiquetaCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateOrConnectWithoutEstadoInput>;
export const LibroEtiquetaCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
