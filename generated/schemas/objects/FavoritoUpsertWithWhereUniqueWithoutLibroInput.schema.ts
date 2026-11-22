import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoCreateWithoutLibroInputObjectSchema as FavoritoCreateWithoutLibroInputObjectSchema } from "./FavoritoCreateWithoutLibroInput.schema.ts";
import { FavoritoUncheckedCreateWithoutLibroInputObjectSchema as FavoritoUncheckedCreateWithoutLibroInputObjectSchema } from "./FavoritoUncheckedCreateWithoutLibroInput.schema.ts";
import { FavoritoUncheckedUpdateWithoutLibroInputObjectSchema as FavoritoUncheckedUpdateWithoutLibroInputObjectSchema } from "./FavoritoUncheckedUpdateWithoutLibroInput.schema.ts";
import { FavoritoUpdateWithoutLibroInputObjectSchema as FavoritoUpdateWithoutLibroInputObjectSchema } from "./FavoritoUpdateWithoutLibroInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => FavoritoUpdateWithoutLibroInputObjectSchema), z.lazy(() => FavoritoUncheckedUpdateWithoutLibroInputObjectSchema)]),
			create: z.union([z.lazy(() => FavoritoCreateWithoutLibroInputObjectSchema), z.lazy(() => FavoritoUncheckedCreateWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const FavoritoUpsertWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.FavoritoUpsertWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpsertWithWhereUniqueWithoutLibroInput>;
export const FavoritoUpsertWithWhereUniqueWithoutLibroInputObjectZodSchema = makeSchema();
