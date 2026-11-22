import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCreateWithoutEstadoInputObjectSchema as EtiquetaCreateWithoutEstadoInputObjectSchema } from "./EtiquetaCreateWithoutEstadoInput.schema.ts";
import { EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema as EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema } from "./EtiquetaUncheckedCreateWithoutEstadoInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./EtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EtiquetaWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EtiquetaCreateWithoutEstadoInputObjectSchema), z.lazy(() => EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const EtiquetaCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCreateOrConnectWithoutEstadoInput>;
export const EtiquetaCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
