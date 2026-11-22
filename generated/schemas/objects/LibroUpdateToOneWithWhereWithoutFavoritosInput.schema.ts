import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroUncheckedUpdateWithoutFavoritosInputObjectSchema as LibroUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./LibroUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { LibroUpdateWithoutFavoritosInputObjectSchema as LibroUpdateWithoutFavoritosInputObjectSchema } from "./LibroUpdateWithoutFavoritosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => LibroUpdateWithoutFavoritosInputObjectSchema),
				z.lazy(() => LibroUncheckedUpdateWithoutFavoritosInputObjectSchema),
			]),
		})
		.strict();
export const LibroUpdateToOneWithWhereWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutFavoritosInput>;
export const LibroUpdateToOneWithWhereWithoutFavoritosInputObjectZodSchema =
	makeSchema();
