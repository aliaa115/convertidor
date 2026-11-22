import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCreateManyEstadoInputEnvelopeObjectSchema as EtiquetaCreateManyEstadoInputEnvelopeObjectSchema } from "./EtiquetaCreateManyEstadoInputEnvelope.schema.ts";
import { EtiquetaCreateOrConnectWithoutEstadoInputObjectSchema as EtiquetaCreateOrConnectWithoutEstadoInputObjectSchema } from "./EtiquetaCreateOrConnectWithoutEstadoInput.schema.ts";
import { EtiquetaCreateWithoutEstadoInputObjectSchema as EtiquetaCreateWithoutEstadoInputObjectSchema } from "./EtiquetaCreateWithoutEstadoInput.schema.ts";
import { EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema as EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema } from "./EtiquetaUncheckedCreateWithoutEstadoInput.schema.ts";
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
			createMany: z.lazy(() => EtiquetaCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => EtiquetaWhereUniqueInputObjectSchema), z.lazy(() => EtiquetaWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const EtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUncheckedCreateNestedManyWithoutEstadoInput>;
export const EtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
