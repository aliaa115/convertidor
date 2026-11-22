import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoCreateWithoutEstadoInputObjectSchema as FavoritoCreateWithoutEstadoInputObjectSchema } from "./FavoritoCreateWithoutEstadoInput.schema.ts";
import { FavoritoUncheckedCreateWithoutEstadoInputObjectSchema as FavoritoUncheckedCreateWithoutEstadoInputObjectSchema } from "./FavoritoUncheckedCreateWithoutEstadoInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => FavoritoCreateWithoutEstadoInputObjectSchema), z.lazy(() => FavoritoUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const FavoritoCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.FavoritoCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateOrConnectWithoutEstadoInput>;
export const FavoritoCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
