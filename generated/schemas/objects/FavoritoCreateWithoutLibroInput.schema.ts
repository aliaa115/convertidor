import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateNestedOneWithoutFavoritosInputObjectSchema as EscritorCreateNestedOneWithoutFavoritosInputObjectSchema } from "./EscritorCreateNestedOneWithoutFavoritosInput.schema.ts";
import { EstadoCreateNestedOneWithoutFavoritosInputObjectSchema as EstadoCreateNestedOneWithoutFavoritosInputObjectSchema } from "./EstadoCreateNestedOneWithoutFavoritosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(() => EscritorCreateNestedOneWithoutFavoritosInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutFavoritosInputObjectSchema).optional(),
		})
		.strict();
export const FavoritoCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.FavoritoCreateWithoutLibroInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateWithoutLibroInput>;
export const FavoritoCreateWithoutLibroInputObjectZodSchema = makeSchema();
