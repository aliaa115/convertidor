import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutFavoritosInputObjectSchema as EscritorCreateNestedOneWithoutFavoritosInputObjectSchema } from "./EscritorCreateNestedOneWithoutFavoritosInput.schema.ts";
import { LibroCreateNestedOneWithoutFavoritosInputObjectSchema as LibroCreateNestedOneWithoutFavoritosInputObjectSchema } from "./LibroCreateNestedOneWithoutFavoritosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z
				.lazy(() => EscritorCreateNestedOneWithoutFavoritosInputObjectSchema)
				.optional(),
			libro: z
				.lazy(() => LibroCreateNestedOneWithoutFavoritosInputObjectSchema)
				.optional(),
		})
		.strict();
export const FavoritoCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.FavoritoCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateWithoutEstadoInput>;
export const FavoritoCreateWithoutEstadoInputObjectZodSchema = makeSchema();
