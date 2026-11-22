import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutFavoritosInputObjectSchema as LibroCreateWithoutFavoritosInputObjectSchema } from "./LibroCreateWithoutFavoritosInput.schema.ts";
import { LibroUncheckedCreateWithoutFavoritosInputObjectSchema as LibroUncheckedCreateWithoutFavoritosInputObjectSchema } from "./LibroUncheckedCreateWithoutFavoritosInput.schema.ts";
import { LibroUncheckedUpdateWithoutFavoritosInputObjectSchema as LibroUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./LibroUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { LibroUpdateWithoutFavoritosInputObjectSchema as LibroUpdateWithoutFavoritosInputObjectSchema } from "./LibroUpdateWithoutFavoritosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => LibroUpdateWithoutFavoritosInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateWithoutFavoritosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => LibroCreateWithoutFavoritosInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutFavoritosInputObjectSchema),
			]),
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroUpsertWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithoutFavoritosInput>;
export const LibroUpsertWithoutFavoritosInputObjectZodSchema = makeSchema();
