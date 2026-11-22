import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroUncheckedUpdateWithoutCapitulosInputObjectSchema as LibroUncheckedUpdateWithoutCapitulosInputObjectSchema } from "./LibroUncheckedUpdateWithoutCapitulosInput.schema.ts";
import { LibroUpdateWithoutCapitulosInputObjectSchema as LibroUpdateWithoutCapitulosInputObjectSchema } from "./LibroUpdateWithoutCapitulosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => LibroUpdateWithoutCapitulosInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutCapitulosInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateToOneWithWhereWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutCapitulosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutCapitulosInput>;
export const LibroUpdateToOneWithWhereWithoutCapitulosInputObjectZodSchema = makeSchema();
