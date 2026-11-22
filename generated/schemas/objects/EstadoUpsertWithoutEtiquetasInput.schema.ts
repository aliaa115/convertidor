import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutEtiquetasInputObjectSchema as EstadoCreateWithoutEtiquetasInputObjectSchema } from "./EstadoCreateWithoutEtiquetasInput.schema.ts";
import { EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema as EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema } from "./EstadoUncheckedCreateWithoutEtiquetasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema as EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutEtiquetasInput.schema.ts";
import { EstadoUpdateWithoutEtiquetasInputObjectSchema as EstadoUpdateWithoutEtiquetasInputObjectSchema } from "./EstadoUpdateWithoutEtiquetasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutEtiquetasInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutEtiquetasInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutEtiquetasInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutEtiquetasInput>;
export const EstadoUpsertWithoutEtiquetasInputObjectZodSchema = makeSchema();
