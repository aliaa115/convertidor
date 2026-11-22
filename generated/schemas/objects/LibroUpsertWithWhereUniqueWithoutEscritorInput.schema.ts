import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutEscritorInputObjectSchema as LibroCreateWithoutEscritorInputObjectSchema } from "./LibroCreateWithoutEscritorInput.schema.ts";
import { LibroUncheckedCreateWithoutEscritorInputObjectSchema as LibroUncheckedCreateWithoutEscritorInputObjectSchema } from "./LibroUncheckedCreateWithoutEscritorInput.schema.ts";
import { LibroUncheckedUpdateWithoutEscritorInputObjectSchema as LibroUncheckedUpdateWithoutEscritorInputObjectSchema } from "./LibroUncheckedUpdateWithoutEscritorInput.schema.ts";
import { LibroUpdateWithoutEscritorInputObjectSchema as LibroUpdateWithoutEscritorInputObjectSchema } from "./LibroUpdateWithoutEscritorInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LibroUpdateWithoutEscritorInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateWithoutEscritorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => LibroCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const LibroUpsertWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithWhereUniqueWithoutEscritorInput>;
export const LibroUpsertWithWhereUniqueWithoutEscritorInputObjectZodSchema =
	makeSchema();
