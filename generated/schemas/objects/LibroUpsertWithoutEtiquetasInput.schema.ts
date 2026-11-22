import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutEtiquetasInputObjectSchema as LibroCreateWithoutEtiquetasInputObjectSchema } from "./LibroCreateWithoutEtiquetasInput.schema.ts";
import { LibroUncheckedCreateWithoutEtiquetasInputObjectSchema as LibroUncheckedCreateWithoutEtiquetasInputObjectSchema } from "./LibroUncheckedCreateWithoutEtiquetasInput.schema.ts";
import { LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema as LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema } from "./LibroUncheckedUpdateWithoutEtiquetasInput.schema.ts";
import { LibroUpdateWithoutEtiquetasInputObjectSchema as LibroUpdateWithoutEtiquetasInputObjectSchema } from "./LibroUpdateWithoutEtiquetasInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => LibroUpdateWithoutEtiquetasInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutEtiquetasInputObjectSchema)]),
			create: z.union([z.lazy(() => LibroCreateWithoutEtiquetasInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutEtiquetasInputObjectSchema)]),
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroUpsertWithoutEtiquetasInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithoutEtiquetasInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithoutEtiquetasInput>;
export const LibroUpsertWithoutEtiquetasInputObjectZodSchema = makeSchema();
