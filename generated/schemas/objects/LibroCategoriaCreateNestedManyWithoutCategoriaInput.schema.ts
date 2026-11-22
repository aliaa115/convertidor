import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaCreateManyCategoriaInputEnvelopeObjectSchema as LibroCategoriaCreateManyCategoriaInputEnvelopeObjectSchema } from "./LibroCategoriaCreateManyCategoriaInputEnvelope.schema.ts";
import { LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema as LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema } from "./LibroCategoriaCreateOrConnectWithoutCategoriaInput.schema.ts";
import { LibroCategoriaCreateWithoutCategoriaInputObjectSchema as LibroCategoriaCreateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaCreateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCategoriaCreateWithoutCategoriaInputObjectSchema),
					z.lazy(() => LibroCategoriaCreateWithoutCategoriaInputObjectSchema).array(),
					z.lazy(() => LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema),
					z.lazy(() => LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([z.lazy(() => LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema), z.lazy(() => LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => LibroCategoriaCreateManyCategoriaInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema), z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroCategoriaCreateNestedManyWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateNestedManyWithoutCategoriaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateNestedManyWithoutCategoriaInput>;
export const LibroCategoriaCreateNestedManyWithoutCategoriaInputObjectZodSchema = makeSchema();
