import * as z from "zod";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./FavoritoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroCountOutputTypeCountFavoritosArgsObjectSchema = makeSchema();
export const LibroCountOutputTypeCountFavoritosArgsObjectZodSchema = makeSchema();
