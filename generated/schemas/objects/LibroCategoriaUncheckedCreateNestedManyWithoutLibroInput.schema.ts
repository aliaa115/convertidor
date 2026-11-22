import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaCreateManyLibroInputEnvelopeObjectSchema as LibroCategoriaCreateManyLibroInputEnvelopeObjectSchema } from "./LibroCategoriaCreateManyLibroInputEnvelope.schema.ts";
import { LibroCategoriaCreateOrConnectWithoutLibroInputObjectSchema as LibroCategoriaCreateOrConnectWithoutLibroInputObjectSchema } from "./LibroCategoriaCreateOrConnectWithoutLibroInput.schema.ts";
import { LibroCategoriaCreateWithoutLibroInputObjectSchema as LibroCategoriaCreateWithoutLibroInputObjectSchema } from "./LibroCategoriaCreateWithoutLibroInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema as LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutLibroInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCategoriaCreateWithoutLibroInputObjectSchema),
					z.lazy(() => LibroCategoriaCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema),
					z.lazy(() => LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => LibroCategoriaCreateOrConnectWithoutLibroInputObjectSchema), z.lazy(() => LibroCategoriaCreateOrConnectWithoutLibroInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => LibroCategoriaCreateManyLibroInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema), z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroCategoriaUncheckedCreateNestedManyWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUncheckedCreateNestedManyWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUncheckedCreateNestedManyWithoutLibroInput>;
export const LibroCategoriaUncheckedCreateNestedManyWithoutLibroInputObjectZodSchema = makeSchema();
