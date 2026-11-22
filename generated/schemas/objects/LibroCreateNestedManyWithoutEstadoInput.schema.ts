import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateManyEstadoInputEnvelopeObjectSchema as LibroCreateManyEstadoInputEnvelopeObjectSchema } from "./LibroCreateManyEstadoInputEnvelope.schema.ts";
import { LibroCreateOrConnectWithoutEstadoInputObjectSchema as LibroCreateOrConnectWithoutEstadoInputObjectSchema } from "./LibroCreateOrConnectWithoutEstadoInput.schema.ts";
import { LibroCreateWithoutEstadoInputObjectSchema as LibroCreateWithoutEstadoInputObjectSchema } from "./LibroCreateWithoutEstadoInput.schema.ts";
import { LibroUncheckedCreateWithoutEstadoInputObjectSchema as LibroUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => LibroCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => LibroUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => LibroUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => LibroCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => LibroCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => LibroWhereUniqueInputObjectSchema),
					z.lazy(() => LibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const LibroCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedManyWithoutEstadoInput>;
export const LibroCreateNestedManyWithoutEstadoInputObjectZodSchema =
	makeSchema();
