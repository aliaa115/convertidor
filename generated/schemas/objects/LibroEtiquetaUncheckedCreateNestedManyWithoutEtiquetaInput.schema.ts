import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaCreateManyEtiquetaInputEnvelopeObjectSchema as LibroEtiquetaCreateManyEtiquetaInputEnvelopeObjectSchema } from "./LibroEtiquetaCreateManyEtiquetaInputEnvelope.schema.ts";
import { LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema as LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateOrConnectWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema as LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema),
					z.lazy(() => LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema).array(),
					z.lazy(() => LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema),
					z.lazy(() => LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([z.lazy(() => LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema), z.lazy(() => LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => LibroEtiquetaCreateManyEtiquetaInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema), z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInput>;
export const LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInputObjectZodSchema = makeSchema();
