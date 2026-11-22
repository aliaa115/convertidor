import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
					z
						.lazy(() => LibroUncheckedCreateWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => LibroCreateOrConnectWithoutEscritorInputObjectSchema),
					z
						.lazy(() => LibroCreateOrConnectWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroCreateManyEscritorInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => LibroWhereUniqueInputObjectSchema),
					z.lazy(() => LibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const LibroUncheckedCreateNestedManyWithoutEscritorInputObjectSchema: z.ZodType<Prisma.LibroUncheckedCreateNestedManyWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUncheckedCreateNestedManyWithoutEscritorInput>;
export const LibroUncheckedCreateNestedManyWithoutEscritorInputObjectZodSchema =
	makeSchema();
