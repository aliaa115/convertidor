import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema as LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema } from "./LibroUncheckedUpdateWithoutEtiquetasInput.schema.ts";
import { LibroUpdateWithoutEtiquetasInputObjectSchema as LibroUpdateWithoutEtiquetasInputObjectSchema } from "./LibroUpdateWithoutEtiquetasInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => LibroUpdateWithoutEtiquetasInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema),
			]),
		})
		.strict();
export const LibroUpdateToOneWithWhereWithoutEtiquetasInputObjectSchema: z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutEtiquetasInput>;
export const LibroUpdateToOneWithWhereWithoutEtiquetasInputObjectZodSchema =
	makeSchema();
