import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroUncheckedUpdateWithoutIdiomaInputObjectSchema as LibroUncheckedUpdateWithoutIdiomaInputObjectSchema } from "./LibroUncheckedUpdateWithoutIdiomaInput.schema.ts";
import { LibroUpdateWithoutIdiomaInputObjectSchema as LibroUpdateWithoutIdiomaInputObjectSchema } from "./LibroUpdateWithoutIdiomaInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => LibroUpdateWithoutIdiomaInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutIdiomaInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateWithWhereUniqueWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.LibroUpdateWithWhereUniqueWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateWithWhereUniqueWithoutIdiomaInput>;
export const LibroUpdateWithWhereUniqueWithoutIdiomaInputObjectZodSchema = makeSchema();
