import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoUncheckedUpdateWithoutEscritorInputObjectSchema as FavoritoUncheckedUpdateWithoutEscritorInputObjectSchema } from "./FavoritoUncheckedUpdateWithoutEscritorInput.schema.ts";
import { FavoritoUpdateWithoutEscritorInputObjectSchema as FavoritoUpdateWithoutEscritorInputObjectSchema } from "./FavoritoUpdateWithoutEscritorInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => FavoritoUpdateWithoutEscritorInputObjectSchema),
				z.lazy(() => FavoritoUncheckedUpdateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const FavoritoUpdateWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateWithWhereUniqueWithoutEscritorInput>;
export const FavoritoUpdateWithWhereUniqueWithoutEscritorInputObjectZodSchema =
	makeSchema();
