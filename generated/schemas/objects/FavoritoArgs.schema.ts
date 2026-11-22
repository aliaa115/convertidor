import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoIncludeObjectSchema as FavoritoIncludeObjectSchema } from "./FavoritoInclude.schema.ts";
import { FavoritoSelectObjectSchema as FavoritoSelectObjectSchema } from "./FavoritoSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => FavoritoSelectObjectSchema).optional(),
			include: z.lazy(() => FavoritoIncludeObjectSchema).optional(),
		})
		.strict();
export const FavoritoArgsObjectSchema = makeSchema();
export const FavoritoArgsObjectZodSchema = makeSchema();
