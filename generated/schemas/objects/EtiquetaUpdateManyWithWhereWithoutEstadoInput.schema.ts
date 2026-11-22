import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EtiquetaScalarWhereInputObjectSchema as EtiquetaScalarWhereInputObjectSchema } from "./EtiquetaScalarWhereInput.schema.ts";
import { EtiquetaUncheckedUpdateManyWithoutEstadoInputObjectSchema as EtiquetaUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./EtiquetaUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { EtiquetaUpdateManyMutationInputObjectSchema as EtiquetaUpdateManyMutationInputObjectSchema } from "./EtiquetaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EtiquetaScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => EtiquetaUpdateManyMutationInputObjectSchema),
				z.lazy(() => EtiquetaUncheckedUpdateManyWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const EtiquetaUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpdateManyWithWhereWithoutEstadoInput>;
export const EtiquetaUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
