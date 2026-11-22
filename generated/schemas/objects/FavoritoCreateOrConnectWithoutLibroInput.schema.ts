import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoCreateWithoutLibroInputObjectSchema as FavoritoCreateWithoutLibroInputObjectSchema } from "./FavoritoCreateWithoutLibroInput.schema.ts";
import { FavoritoUncheckedCreateWithoutLibroInputObjectSchema as FavoritoUncheckedCreateWithoutLibroInputObjectSchema } from "./FavoritoUncheckedCreateWithoutLibroInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => FavoritoCreateWithoutLibroInputObjectSchema), z.lazy(() => FavoritoUncheckedCreateWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const FavoritoCreateOrConnectWithoutLibroInputObjectSchema: z.ZodType<Prisma.FavoritoCreateOrConnectWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateOrConnectWithoutLibroInput>;
export const FavoritoCreateOrConnectWithoutLibroInputObjectZodSchema = makeSchema();
