import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroUncheckedUpdateWithoutEscritorInputObjectSchema as LibroUncheckedUpdateWithoutEscritorInputObjectSchema } from "./LibroUncheckedUpdateWithoutEscritorInput.schema.ts";
import { LibroUpdateWithoutEscritorInputObjectSchema as LibroUpdateWithoutEscritorInputObjectSchema } from "./LibroUpdateWithoutEscritorInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => LibroUpdateWithoutEscritorInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.LibroUpdateWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateWithWhereUniqueWithoutEscritorInput>;
export const LibroUpdateWithWhereUniqueWithoutEscritorInputObjectZodSchema = makeSchema();
