import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutFavoritosInputObjectSchema as EscritorCreateNestedOneWithoutFavoritosInputObjectSchema } from "./EscritorCreateNestedOneWithoutFavoritosInput.schema.ts";
import { EstadoCreateNestedOneWithoutFavoritosInputObjectSchema as EstadoCreateNestedOneWithoutFavoritosInputObjectSchema } from "./EstadoCreateNestedOneWithoutFavoritosInput.schema.ts";
import { LibroCreateNestedOneWithoutFavoritosInputObjectSchema as LibroCreateNestedOneWithoutFavoritosInputObjectSchema } from "./LibroCreateNestedOneWithoutFavoritosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			escritor: z
				.lazy(() => EscritorCreateNestedOneWithoutFavoritosInputObjectSchema)
				.optional(),
			libro: z
				.lazy(() => LibroCreateNestedOneWithoutFavoritosInputObjectSchema)
				.optional(),
			estado: z.lazy(
				() => EstadoCreateNestedOneWithoutFavoritosInputObjectSchema,
			),
		})
		.strict();
export const FavoritoCreateInputObjectSchema: z.ZodType<Prisma.FavoritoCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateInput>;
export const FavoritoCreateInputObjectZodSchema = makeSchema();
