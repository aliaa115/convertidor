import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutLibroEtiquetasInputObjectSchema as EstadoCreateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoCreateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema as EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema as EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoUpdateWithoutLibroEtiquetasInputObjectSchema as EstadoUpdateWithoutLibroEtiquetasInputObjectSchema } from "./EstadoUpdateWithoutLibroEtiquetasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutLibroEtiquetasInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedUpdateWithoutLibroEtiquetasInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutLibroEtiquetasInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedCreateWithoutLibroEtiquetasInputObjectSchema,
				),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutLibroEtiquetasInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutLibroEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutLibroEtiquetasInput>;
export const EstadoUpsertWithoutLibroEtiquetasInputObjectZodSchema =
	makeSchema();
