import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroUncheckedUpdateWithoutEstadoInputObjectSchema as LibroUncheckedUpdateWithoutEstadoInputObjectSchema } from "./LibroUncheckedUpdateWithoutEstadoInput.schema.ts";
import { LibroUpdateWithoutEstadoInputObjectSchema as LibroUpdateWithoutEstadoInputObjectSchema } from "./LibroUpdateWithoutEstadoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => LibroUpdateWithoutEstadoInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateWithWhereUniqueWithoutEstadoInput>;
export const LibroUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
