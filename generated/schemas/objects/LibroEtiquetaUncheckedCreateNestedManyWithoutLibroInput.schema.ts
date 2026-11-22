import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaCreateManyLibroInputEnvelopeObjectSchema as LibroEtiquetaCreateManyLibroInputEnvelopeObjectSchema } from "./LibroEtiquetaCreateManyLibroInputEnvelope.schema.ts";
import { LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema as LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema } from "./LibroEtiquetaCreateOrConnectWithoutLibroInput.schema.ts";
import { LibroEtiquetaCreateWithoutLibroInputObjectSchema as LibroEtiquetaCreateWithoutLibroInputObjectSchema } from "./LibroEtiquetaCreateWithoutLibroInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutLibroInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroEtiquetaCreateWithoutLibroInputObjectSchema),
					z.lazy(() => LibroEtiquetaCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema),
					z.lazy(() => LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema), z.lazy(() => LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => LibroEtiquetaCreateManyLibroInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema), z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroEtiquetaUncheckedCreateNestedManyWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUncheckedCreateNestedManyWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUncheckedCreateNestedManyWithoutLibroInput>;
export const LibroEtiquetaUncheckedCreateNestedManyWithoutLibroInputObjectZodSchema = makeSchema();
