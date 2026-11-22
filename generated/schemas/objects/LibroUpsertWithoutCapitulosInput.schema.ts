import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutCapitulosInputObjectSchema as LibroCreateWithoutCapitulosInputObjectSchema } from "./LibroCreateWithoutCapitulosInput.schema.ts";
import { LibroUncheckedCreateWithoutCapitulosInputObjectSchema as LibroUncheckedCreateWithoutCapitulosInputObjectSchema } from "./LibroUncheckedCreateWithoutCapitulosInput.schema.ts";
import { LibroUncheckedUpdateWithoutCapitulosInputObjectSchema as LibroUncheckedUpdateWithoutCapitulosInputObjectSchema } from "./LibroUncheckedUpdateWithoutCapitulosInput.schema.ts";
import { LibroUpdateWithoutCapitulosInputObjectSchema as LibroUpdateWithoutCapitulosInputObjectSchema } from "./LibroUpdateWithoutCapitulosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => LibroUpdateWithoutCapitulosInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutCapitulosInputObjectSchema)]),
			create: z.union([z.lazy(() => LibroCreateWithoutCapitulosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutCapitulosInputObjectSchema)]),
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroUpsertWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithoutCapitulosInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithoutCapitulosInput>;
export const LibroUpsertWithoutCapitulosInputObjectZodSchema = makeSchema();
