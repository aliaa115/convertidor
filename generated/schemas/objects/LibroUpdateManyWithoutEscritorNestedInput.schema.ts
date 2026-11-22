import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateManyEscritorInputEnvelopeObjectSchema as LibroCreateManyEscritorInputEnvelopeObjectSchema } from "./LibroCreateManyEscritorInputEnvelope.schema.ts";
import { LibroCreateOrConnectWithoutEscritorInputObjectSchema as LibroCreateOrConnectWithoutEscritorInputObjectSchema } from "./LibroCreateOrConnectWithoutEscritorInput.schema.ts";
import { LibroCreateWithoutEscritorInputObjectSchema as LibroCreateWithoutEscritorInputObjectSchema } from "./LibroCreateWithoutEscritorInput.schema.ts";
import { LibroScalarWhereInputObjectSchema as LibroScalarWhereInputObjectSchema } from "./LibroScalarWhereInput.schema.ts";
import { LibroUncheckedCreateWithoutEscritorInputObjectSchema as LibroUncheckedCreateWithoutEscritorInputObjectSchema } from "./LibroUncheckedCreateWithoutEscritorInput.schema.ts";
import { LibroUpdateManyWithWhereWithoutEscritorInputObjectSchema as LibroUpdateManyWithWhereWithoutEscritorInputObjectSchema } from "./LibroUpdateManyWithWhereWithoutEscritorInput.schema.ts";
import { LibroUpdateWithWhereUniqueWithoutEscritorInputObjectSchema as LibroUpdateWithWhereUniqueWithoutEscritorInputObjectSchema } from "./LibroUpdateWithWhereUniqueWithoutEscritorInput.schema.ts";
import { LibroUpsertWithWhereUniqueWithoutEscritorInputObjectSchema as LibroUpsertWithWhereUniqueWithoutEscritorInputObjectSchema } from "./LibroUpsertWithWhereUniqueWithoutEscritorInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => LibroCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => LibroUncheckedCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => LibroUncheckedCreateWithoutEscritorInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => LibroCreateOrConnectWithoutEscritorInputObjectSchema), z.lazy(() => LibroCreateOrConnectWithoutEscritorInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => LibroUpsertWithWhereUniqueWithoutEscritorInputObjectSchema), z.lazy(() => LibroUpsertWithWhereUniqueWithoutEscritorInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => LibroCreateManyEscritorInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => LibroWhereUniqueInputObjectSchema), z.lazy(() => LibroWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => LibroWhereUniqueInputObjectSchema), z.lazy(() => LibroWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => LibroWhereUniqueInputObjectSchema), z.lazy(() => LibroWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => LibroWhereUniqueInputObjectSchema), z.lazy(() => LibroWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => LibroUpdateWithWhereUniqueWithoutEscritorInputObjectSchema), z.lazy(() => LibroUpdateWithWhereUniqueWithoutEscritorInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => LibroUpdateManyWithWhereWithoutEscritorInputObjectSchema), z.lazy(() => LibroUpdateManyWithWhereWithoutEscritorInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => LibroScalarWhereInputObjectSchema), z.lazy(() => LibroScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroUpdateManyWithoutEscritorNestedInputObjectSchema: z.ZodType<Prisma.LibroUpdateManyWithoutEscritorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateManyWithoutEscritorNestedInput>;
export const LibroUpdateManyWithoutEscritorNestedInputObjectZodSchema = makeSchema();
