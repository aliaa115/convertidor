import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutEstadoInputObjectSchema as LibroCreateWithoutEstadoInputObjectSchema } from "./LibroCreateWithoutEstadoInput.schema.ts";
import { LibroUncheckedCreateWithoutEstadoInputObjectSchema as LibroUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroUncheckedUpdateWithoutEstadoInputObjectSchema as LibroUncheckedUpdateWithoutEstadoInputObjectSchema } from "./LibroUncheckedUpdateWithoutEstadoInput.schema.ts";
import { LibroUpdateWithoutEstadoInputObjectSchema as LibroUpdateWithoutEstadoInputObjectSchema } from "./LibroUpdateWithoutEstadoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LibroUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => LibroCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const LibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithWhereUniqueWithoutEstadoInput>;
export const LibroUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
