import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema as EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUpdateWithoutLibroEtiquetasInputObjectSchema as EstadoUpdateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUpdateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutLibroEtiquetasInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema,
				),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutLibroEtiquetasInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutLibroEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutLibroEtiquetasInput>;
export const EstadoUpdateToOneWithWhereWithoutLibroEtiquetasInputObjectZodSchema =
	makeSchema();
