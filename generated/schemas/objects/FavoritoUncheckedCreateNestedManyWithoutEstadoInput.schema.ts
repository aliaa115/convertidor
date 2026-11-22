import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoCreateManyEstadoInputEnvelopeObjectSchema as FavoritoCreateManyEstadoInputEnvelopeObjectSchema } from "./FavoritoCreateManyEstadoInputEnvelope.schema.ts";
import { FavoritoCreateOrConnectWithoutEstadoInputObjectSchema as FavoritoCreateOrConnectWithoutEstadoInputObjectSchema } from "./FavoritoCreateOrConnectWithoutEstadoInput.schema.ts";
import { FavoritoCreateWithoutEstadoInputObjectSchema as FavoritoCreateWithoutEstadoInputObjectSchema } from "./FavoritoCreateWithoutEstadoInput.schema.ts";
import { FavoritoUncheckedCreateWithoutEstadoInputObjectSchema as FavoritoUncheckedCreateWithoutEstadoInputObjectSchema } from "./FavoritoUncheckedCreateWithoutEstadoInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => FavoritoCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => FavoritoCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => FavoritoUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => FavoritoUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => FavoritoCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => FavoritoCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => FavoritoCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => FavoritoWhereUniqueInputObjectSchema), z.lazy(() => FavoritoWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const FavoritoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.FavoritoUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUncheckedCreateNestedManyWithoutEstadoInput>;
export const FavoritoUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
