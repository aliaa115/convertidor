import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoCreateWithoutEstadoInputObjectSchema as FavoritoCreateWithoutEstadoInputObjectSchema } from "./FavoritoCreateWithoutEstadoInput.schema.ts";
import { FavoritoUncheckedCreateWithoutEstadoInputObjectSchema as FavoritoUncheckedCreateWithoutEstadoInputObjectSchema } from "./FavoritoUncheckedCreateWithoutEstadoInput.schema.ts";
import { FavoritoUncheckedUpdateWithoutEstadoInputObjectSchema as FavoritoUncheckedUpdateWithoutEstadoInputObjectSchema } from "./FavoritoUncheckedUpdateWithoutEstadoInput.schema.ts";
import { FavoritoUpdateWithoutEstadoInputObjectSchema as FavoritoUpdateWithoutEstadoInputObjectSchema } from "./FavoritoUpdateWithoutEstadoInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => FavoritoUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => FavoritoUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => FavoritoCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => FavoritoUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const FavoritoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.FavoritoUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpsertWithWhereUniqueWithoutEstadoInput>;
export const FavoritoUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
