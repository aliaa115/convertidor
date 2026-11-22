import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaCreateManyLibroInputEnvelopeObjectSchema as LibroCategoriaCreateManyLibroInputEnvelopeObjectSchema } from "./LibroCategoriaCreateManyLibroInputEnvelope.schema.ts";
import { LibroCategoriaCreateOrConnectWithoutLibroInputObjectSchema as LibroCategoriaCreateOrConnectWithoutLibroInputObjectSchema } from "./LibroCategoriaCreateOrConnectWithoutLibroInput.schema.ts";
import { LibroCategoriaCreateWithoutLibroInputObjectSchema as LibroCategoriaCreateWithoutLibroInputObjectSchema } from "./LibroCategoriaCreateWithoutLibroInput.schema.ts";
import { LibroCategoriaScalarWhereInputObjectSchema as LibroCategoriaScalarWhereInputObjectSchema } from "./LibroCategoriaScalarWhereInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema as LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutLibroInput.schema.ts";
import { LibroCategoriaUpdateManyWithWhereWithoutLibroInputObjectSchema as LibroCategoriaUpdateManyWithWhereWithoutLibroInputObjectSchema } from "./LibroCategoriaUpdateManyWithWhereWithoutLibroInput.schema.ts";
import { LibroCategoriaUpdateWithWhereUniqueWithoutLibroInputObjectSchema as LibroCategoriaUpdateWithWhereUniqueWithoutLibroInputObjectSchema } from "./LibroCategoriaUpdateWithWhereUniqueWithoutLibroInput.schema.ts";
import { LibroCategoriaUpsertWithWhereUniqueWithoutLibroInputObjectSchema as LibroCategoriaUpsertWithWhereUniqueWithoutLibroInputObjectSchema } from "./LibroCategoriaUpsertWithWhereUniqueWithoutLibroInput.schema.ts";
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
			upsert: z
				.union([z.lazy(() => LibroCategoriaUpsertWithWhereUniqueWithoutLibroInputObjectSchema), z.lazy(() => LibroCategoriaUpsertWithWhereUniqueWithoutLibroInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => LibroCategoriaCreateManyLibroInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema), z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema), z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema), z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema), z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array()]).optional(),
			update: z
				.union([z.lazy(() => LibroCategoriaUpdateWithWhereUniqueWithoutLibroInputObjectSchema), z.lazy(() => LibroCategoriaUpdateWithWhereUniqueWithoutLibroInputObjectSchema).array()])
				.optional(),
			updateMany: z
				.union([z.lazy(() => LibroCategoriaUpdateManyWithWhereWithoutLibroInputObjectSchema), z.lazy(() => LibroCategoriaUpdateManyWithWhereWithoutLibroInputObjectSchema).array()])
				.optional(),
			deleteMany: z.union([z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema), z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroCategoriaUpdateManyWithoutLibroNestedInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateManyWithoutLibroNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateManyWithoutLibroNestedInput>;
export const LibroCategoriaUpdateManyWithoutLibroNestedInputObjectZodSchema = makeSchema();
