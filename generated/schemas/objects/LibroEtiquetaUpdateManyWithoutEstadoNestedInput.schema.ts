import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaCreateManyEstadoInputEnvelopeObjectSchema as LibroEtiquetaCreateManyEstadoInputEnvelopeObjectSchema } from "./LibroEtiquetaCreateManyEstadoInputEnvelope.schema.ts";
import { LibroEtiquetaCreateOrConnectWithoutEstadoInputObjectSchema as LibroEtiquetaCreateOrConnectWithoutEstadoInputObjectSchema } from "./LibroEtiquetaCreateOrConnectWithoutEstadoInput.schema.ts";
import { LibroEtiquetaCreateWithoutEstadoInputObjectSchema as LibroEtiquetaCreateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaCreateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaScalarWhereInputObjectSchema as LibroEtiquetaScalarWhereInputObjectSchema } from "./LibroEtiquetaScalarWhereInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema as LibroEtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
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
			upsert: z
				.union([z.lazy(() => LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => LibroEtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => LibroEtiquetaCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema), z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema), z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema), z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema), z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
			update: z
				.union([z.lazy(() => LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => LibroEtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema).array()])
				.optional(),
			updateMany: z
				.union([z.lazy(() => LibroEtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema), z.lazy(() => LibroEtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema).array()])
				.optional(),
			deleteMany: z.union([z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema), z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroEtiquetaUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyWithoutEstadoNestedInput>;
export const LibroEtiquetaUpdateManyWithoutEstadoNestedInputObjectZodSchema = makeSchema();
