import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutFavoritosInputObjectSchema as EstadoCreateNestedOneWithoutFavoritosInputObjectSchema } from "./EstadoCreateNestedOneWithoutFavoritosInput.schema.ts";
import { LibroCreateNestedOneWithoutFavoritosInputObjectSchema as LibroCreateNestedOneWithoutFavoritosInputObjectSchema } from "./LibroCreateNestedOneWithoutFavoritosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libro: z.lazy(() => LibroCreateNestedOneWithoutFavoritosInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutFavoritosInputObjectSchema).optional(),
		})
		.strict();
export const FavoritoCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoCreateWithoutEscritorInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateWithoutEscritorInput>;
export const FavoritoCreateWithoutEscritorInputObjectZodSchema = makeSchema();
