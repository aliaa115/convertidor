import * as z from "zod";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./FavoritoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountFavoritosArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountFavoritosArgsObjectZodSchema = makeSchema();
