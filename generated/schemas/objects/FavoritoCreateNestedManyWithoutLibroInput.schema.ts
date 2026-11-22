import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoCreateManyLibroInputEnvelopeObjectSchema as FavoritoCreateManyLibroInputEnvelopeObjectSchema } from "./FavoritoCreateManyLibroInputEnvelope.schema.ts";
import { FavoritoCreateOrConnectWithoutLibroInputObjectSchema as FavoritoCreateOrConnectWithoutLibroInputObjectSchema } from "./FavoritoCreateOrConnectWithoutLibroInput.schema.ts";
import { FavoritoCreateWithoutLibroInputObjectSchema as FavoritoCreateWithoutLibroInputObjectSchema } from "./FavoritoCreateWithoutLibroInput.schema.ts";
import { FavoritoUncheckedCreateWithoutLibroInputObjectSchema as FavoritoUncheckedCreateWithoutLibroInputObjectSchema } from "./FavoritoUncheckedCreateWithoutLibroInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => FavoritoCreateWithoutLibroInputObjectSchema),
					z.lazy(() => FavoritoCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => FavoritoUncheckedCreateWithoutLibroInputObjectSchema),
					z.lazy(() => FavoritoUncheckedCreateWithoutLibroInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => FavoritoCreateOrConnectWithoutLibroInputObjectSchema), z.lazy(() => FavoritoCreateOrConnectWithoutLibroInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => FavoritoCreateManyLibroInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => FavoritoWhereUniqueInputObjectSchema), z.lazy(() => FavoritoWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const FavoritoCreateNestedManyWithoutLibroInputObjectSchema: z.ZodType<Prisma.FavoritoCreateNestedManyWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateNestedManyWithoutLibroInput>;
export const FavoritoCreateNestedManyWithoutLibroInputObjectZodSchema = makeSchema();
