import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./FavoritoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => FavoritoWhereInputObjectSchema).optional(),
			some: z.lazy(() => FavoritoWhereInputObjectSchema).optional(),
			none: z.lazy(() => FavoritoWhereInputObjectSchema).optional(),
		})
		.strict();
export const FavoritoListRelationFilterObjectSchema: z.ZodType<Prisma.FavoritoListRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoListRelationFilter>;
export const FavoritoListRelationFilterObjectZodSchema = makeSchema();
