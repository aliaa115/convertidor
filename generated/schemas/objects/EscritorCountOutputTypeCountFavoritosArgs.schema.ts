import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./FavoritoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCountOutputTypeCountFavoritosArgsObjectSchema =
	makeSchema();
export const EscritorCountOutputTypeCountFavoritosArgsObjectZodSchema =
	makeSchema();
