import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema as LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema),
				z.lazy(
					() => LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateOrConnectWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateOrConnectWithoutEtiquetaInput>;
export const LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectZodSchema =
	makeSchema();
