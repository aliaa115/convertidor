import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoCreateManyEscritorInputEnvelopeObjectSchema as FavoritoCreateManyEscritorInputEnvelopeObjectSchema } from "./FavoritoCreateManyEscritorInputEnvelope.schema.ts";
import { FavoritoCreateOrConnectWithoutEscritorInputObjectSchema as FavoritoCreateOrConnectWithoutEscritorInputObjectSchema } from "./FavoritoCreateOrConnectWithoutEscritorInput.schema.ts";
import { FavoritoCreateWithoutEscritorInputObjectSchema as FavoritoCreateWithoutEscritorInputObjectSchema } from "./FavoritoCreateWithoutEscritorInput.schema.ts";
import { FavoritoUncheckedCreateWithoutEscritorInputObjectSchema as FavoritoUncheckedCreateWithoutEscritorInputObjectSchema } from "./FavoritoUncheckedCreateWithoutEscritorInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => FavoritoCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => FavoritoCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => FavoritoUncheckedCreateWithoutEscritorInputObjectSchema),
					z
						.lazy(() => FavoritoUncheckedCreateWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => FavoritoCreateOrConnectWithoutEscritorInputObjectSchema),
					z
						.lazy(() => FavoritoCreateOrConnectWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => FavoritoCreateManyEscritorInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const FavoritoUncheckedCreateNestedManyWithoutEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoUncheckedCreateNestedManyWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUncheckedCreateNestedManyWithoutEscritorInput>;
export const FavoritoUncheckedCreateNestedManyWithoutEscritorInputObjectZodSchema =
	makeSchema();
