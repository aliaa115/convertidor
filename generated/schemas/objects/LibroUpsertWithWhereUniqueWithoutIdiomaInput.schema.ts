import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutIdiomaInputObjectSchema as LibroCreateWithoutIdiomaInputObjectSchema } from "./LibroCreateWithoutIdiomaInput.schema.ts";
import { LibroUncheckedCreateWithoutIdiomaInputObjectSchema as LibroUncheckedCreateWithoutIdiomaInputObjectSchema } from "./LibroUncheckedCreateWithoutIdiomaInput.schema.ts";
import { LibroUncheckedUpdateWithoutIdiomaInputObjectSchema as LibroUncheckedUpdateWithoutIdiomaInputObjectSchema } from "./LibroUncheckedUpdateWithoutIdiomaInput.schema.ts";
import { LibroUpdateWithoutIdiomaInputObjectSchema as LibroUpdateWithoutIdiomaInputObjectSchema } from "./LibroUpdateWithoutIdiomaInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LibroUpdateWithoutIdiomaInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateWithoutIdiomaInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => LibroCreateWithoutIdiomaInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutIdiomaInputObjectSchema),
			]),
		})
		.strict();
export const LibroUpsertWithWhereUniqueWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithWhereUniqueWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithWhereUniqueWithoutIdiomaInput>;
export const LibroUpsertWithWhereUniqueWithoutIdiomaInputObjectZodSchema =
	makeSchema();
