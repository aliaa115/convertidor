import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCreateManyEstadoInputEnvelopeObjectSchema as EtiquetaCreateManyEstadoInputEnvelopeObjectSchema } from "./EtiquetaCreateManyEstadoInputEnvelope.schema.ts";
import { EtiquetaCreateOrConnectWithoutEstadoInputObjectSchema as EtiquetaCreateOrConnectWithoutEstadoInputObjectSchema } from "./EtiquetaCreateOrConnectWithoutEstadoInput.schema.ts";
import { EtiquetaCreateWithoutEstadoInputObjectSchema as EtiquetaCreateWithoutEstadoInputObjectSchema } from "./EtiquetaCreateWithoutEstadoInput.schema.ts";
import { EtiquetaScalarWhereInputObjectSchema as EtiquetaScalarWhereInputObjectSchema } from "./EtiquetaScalarWhereInput.schema.ts";
import { EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema as EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema } from "./EtiquetaUncheckedCreateWithoutEstadoInput.schema.ts";
import { EtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema as EtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./EtiquetaUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { EtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as EtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./EtiquetaUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { EtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as EtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./EtiquetaUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./EtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EtiquetaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => EtiquetaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => EtiquetaCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => EtiquetaCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => EtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => EtiquetaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => EtiquetaCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => EtiquetaWhereUniqueInputObjectSchema), z.lazy(() => EtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => EtiquetaWhereUniqueInputObjectSchema), z.lazy(() => EtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => EtiquetaWhereUniqueInputObjectSchema), z.lazy(() => EtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => EtiquetaWhereUniqueInputObjectSchema), z.lazy(() => EtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => EtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => EtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => EtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema), z.lazy(() => EtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => EtiquetaScalarWhereInputObjectSchema), z.lazy(() => EtiquetaScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const EtiquetaUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.EtiquetaUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpdateManyWithoutEstadoNestedInput>;
export const EtiquetaUpdateManyWithoutEstadoNestedInputObjectZodSchema = makeSchema();
