import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema as EtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./EtiquetaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { EtiquetaUpdateWithoutEstadoInputObjectSchema as EtiquetaUpdateWithoutEstadoInputObjectSchema } from "./EtiquetaUpdateWithoutEstadoInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./EtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EtiquetaWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => EtiquetaUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => EtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const EtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpdateWithWhereUniqueWithoutEstadoInput>;
export const EtiquetaUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
