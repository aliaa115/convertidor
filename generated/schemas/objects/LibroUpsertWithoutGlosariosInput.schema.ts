import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutGlosariosInputObjectSchema as LibroCreateWithoutGlosariosInputObjectSchema } from "./LibroCreateWithoutGlosariosInput.schema.ts";
import { LibroUncheckedCreateWithoutGlosariosInputObjectSchema as LibroUncheckedCreateWithoutGlosariosInputObjectSchema } from "./LibroUncheckedCreateWithoutGlosariosInput.schema.ts";
import { LibroUncheckedUpdateWithoutGlosariosInputObjectSchema as LibroUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./LibroUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { LibroUpdateWithoutGlosariosInputObjectSchema as LibroUpdateWithoutGlosariosInputObjectSchema } from "./LibroUpdateWithoutGlosariosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => LibroUpdateWithoutGlosariosInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutGlosariosInputObjectSchema)]),
			create: z.union([z.lazy(() => LibroCreateWithoutGlosariosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutGlosariosInputObjectSchema)]),
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroUpsertWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithoutGlosariosInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithoutGlosariosInput>;
export const LibroUpsertWithoutGlosariosInputObjectZodSchema = makeSchema();
