import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoCreateWithoutEscritorInputObjectSchema as FavoritoCreateWithoutEscritorInputObjectSchema } from "./FavoritoCreateWithoutEscritorInput.schema.ts";
import { FavoritoUncheckedCreateWithoutEscritorInputObjectSchema as FavoritoUncheckedCreateWithoutEscritorInputObjectSchema } from "./FavoritoUncheckedCreateWithoutEscritorInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => FavoritoCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => FavoritoUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const FavoritoCreateOrConnectWithoutEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoCreateOrConnectWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateOrConnectWithoutEscritorInput>;
export const FavoritoCreateOrConnectWithoutEscritorInputObjectZodSchema =
	makeSchema();
