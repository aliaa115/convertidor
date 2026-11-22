import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaCreateManyEstadoInputEnvelopeObjectSchema as LibroEtiquetaCreateManyEstadoInputEnvelopeObjectSchema } from "./LibroEtiquetaCreateManyEstadoInputEnvelope.schema.ts";
import { LibroEtiquetaCreateOrConnectWithoutEstadoInputObjectSchema as LibroEtiquetaCreateOrConnectWithoutEstadoInputObjectSchema } from "./LibroEtiquetaCreateOrConnectWithoutEstadoInput.schema.ts";
import { LibroEtiquetaCreateWithoutEstadoInputObjectSchema as LibroEtiquetaCreateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaCreateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroEtiquetaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => LibroEtiquetaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => LibroEtiquetaCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => LibroEtiquetaCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => LibroEtiquetaCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema), z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroEtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUncheckedCreateNestedManyWithoutEstadoInput>;
export const LibroEtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
