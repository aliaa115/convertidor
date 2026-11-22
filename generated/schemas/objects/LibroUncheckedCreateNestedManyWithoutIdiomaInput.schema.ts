import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateManyIdiomaInputEnvelopeObjectSchema as LibroCreateManyIdiomaInputEnvelopeObjectSchema } from "./LibroCreateManyIdiomaInputEnvelope.schema.ts";
import { LibroCreateOrConnectWithoutIdiomaInputObjectSchema as LibroCreateOrConnectWithoutIdiomaInputObjectSchema } from "./LibroCreateOrConnectWithoutIdiomaInput.schema.ts";
import { LibroCreateWithoutIdiomaInputObjectSchema as LibroCreateWithoutIdiomaInputObjectSchema } from "./LibroCreateWithoutIdiomaInput.schema.ts";
import { LibroUncheckedCreateWithoutIdiomaInputObjectSchema as LibroUncheckedCreateWithoutIdiomaInputObjectSchema } from "./LibroUncheckedCreateWithoutIdiomaInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutIdiomaInputObjectSchema),
					z.lazy(() => LibroCreateWithoutIdiomaInputObjectSchema).array(),
					z.lazy(() => LibroUncheckedCreateWithoutIdiomaInputObjectSchema),
					z.lazy(() => LibroUncheckedCreateWithoutIdiomaInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => LibroCreateOrConnectWithoutIdiomaInputObjectSchema), z.lazy(() => LibroCreateOrConnectWithoutIdiomaInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => LibroCreateManyIdiomaInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroWhereUniqueInputObjectSchema), z.lazy(() => LibroWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroUncheckedCreateNestedManyWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.LibroUncheckedCreateNestedManyWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUncheckedCreateNestedManyWithoutIdiomaInput>;
export const LibroUncheckedCreateNestedManyWithoutIdiomaInputObjectZodSchema = makeSchema();
