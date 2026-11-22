import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutListaLibrosInputObjectSchema as LibroCreateWithoutListaLibrosInputObjectSchema } from "./LibroCreateWithoutListaLibrosInput.schema.ts";
import { LibroUncheckedCreateWithoutListaLibrosInputObjectSchema as LibroUncheckedCreateWithoutListaLibrosInputObjectSchema } from "./LibroUncheckedCreateWithoutListaLibrosInput.schema.ts";
import { LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema as LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema } from "./LibroUncheckedUpdateWithoutListaLibrosInput.schema.ts";
import { LibroUpdateWithoutListaLibrosInputObjectSchema as LibroUpdateWithoutListaLibrosInputObjectSchema } from "./LibroUpdateWithoutListaLibrosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => LibroUpdateWithoutListaLibrosInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => LibroCreateWithoutListaLibrosInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutListaLibrosInputObjectSchema),
			]),
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroUpsertWithoutListaLibrosInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithoutListaLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithoutListaLibrosInput>;
export const LibroUpsertWithoutListaLibrosInputObjectZodSchema = makeSchema();
