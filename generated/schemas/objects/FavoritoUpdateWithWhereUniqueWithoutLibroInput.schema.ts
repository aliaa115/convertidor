import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoUncheckedUpdateWithoutLibroInputObjectSchema as FavoritoUncheckedUpdateWithoutLibroInputObjectSchema } from "./FavoritoUncheckedUpdateWithoutLibroInput.schema.ts";
import { FavoritoUpdateWithoutLibroInputObjectSchema as FavoritoUpdateWithoutLibroInputObjectSchema } from "./FavoritoUpdateWithoutLibroInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => FavoritoUpdateWithoutLibroInputObjectSchema), z.lazy(() => FavoritoUncheckedUpdateWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const FavoritoUpdateWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateWithWhereUniqueWithoutLibroInput>;
export const FavoritoUpdateWithWhereUniqueWithoutLibroInputObjectZodSchema = makeSchema();
