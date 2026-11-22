import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateManyEscritorInputEnvelopeObjectSchema as LibroCreateManyEscritorInputEnvelopeObjectSchema } from "./LibroCreateManyEscritorInputEnvelope.schema.ts";
import { LibroCreateOrConnectWithoutEscritorInputObjectSchema as LibroCreateOrConnectWithoutEscritorInputObjectSchema } from "./LibroCreateOrConnectWithoutEscritorInput.schema.ts";
import { LibroCreateWithoutEscritorInputObjectSchema as LibroCreateWithoutEscritorInputObjectSchema } from "./LibroCreateWithoutEscritorInput.schema.ts";
import { LibroUncheckedCreateWithoutEscritorInputObjectSchema as LibroUncheckedCreateWithoutEscritorInputObjectSchema } from "./LibroUncheckedCreateWithoutEscritorInput.schema.ts";
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
			createMany: z.lazy(() => LibroCreateManyEscritorInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroWhereUniqueInputObjectSchema), z.lazy(() => LibroWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroCreateNestedManyWithoutEscritorInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedManyWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedManyWithoutEscritorInput>;
export const LibroCreateNestedManyWithoutEscritorInputObjectZodSchema = makeSchema();
